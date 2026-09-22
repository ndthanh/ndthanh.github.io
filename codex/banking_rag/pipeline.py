"""Run in a Databricks notebook/Job with Spark; never execute PDF parsing locally."""

from collections import defaultdict
from datetime import datetime, timezone, timedelta
import json
import time

from .llm import DatabricksLLM, SUMMARY_PROMPT
from .storage import merge_rows
from .structure import build_nodes, enrich_with_prep, make_chunks, stable_id


def now():
    return datetime.now(timezone.utc).isoformat()


def set_status(spark, c, version_id, status, error_code=""):
    spark.sql(
        f"UPDATE {c.table('banking_document_registry')} SET status=:s, error_code=:e, updated_at=:t WHERE version_id=:v",
        args={"s": status, "e": error_code, "t": now(), "v": version_id},
    )


def summarize(c, doc, nodes, chunks, llm):
    by_id = {n.node_id: n for n in nodes}
    groups = defaultdict(list)
    for row in chunks:
        ancestry = [by_id[n] for n in row["ancestor_ids"] + [row["node_id"]]]
        parent = next(
            (n for n in reversed(ancestry) if n.kind in {"article", "section", "chapter"}), nodes[0]
        )
        groups[parent.node_id].append(row)
    rows = []
    for node_id, children in groups.items():
        node = by_id[node_id]
        batches, batch, size = [], [], 0
        for child in children:
            if batch and (len(batch) >= 8 or size + len(child["chunk_content"]) > c.max_context_chars):
                batches.append(batch)
                batch, size = [], 0
            batch.append(child)
            size += len(child["chunk_content"])
        if batch:
            batches.append(batch)
        for offset, batch in enumerate(batches):
            result = llm.json(
                SUMMARY_PROMPT,
                {"path": " > ".join(node.path), "sources": [b["chunk_content"] for b in batch]},
            )
            text = result.get("summary", "")
            if not isinstance(text, str) or not text.strip():
                raise ValueError("SUMMARY_EMPTY")
            rows.append(
                {
                    "summary_id": stable_id(doc["version_id"], node_id, offset, "summary"),
                    "version_id": doc["version_id"],
                    "node_id": node_id,
                    "parent_node_id": node.parent_node_id,
                    "node_title": node.title,
                    "path_text": " > ".join(node.path),
                    "summary_text": text,
                    "summary_to_embed": " > ".join(node.path) + "\n" + text,
                    "supporting_chunk_ids": json.dumps([b["chunk_pk"] for b in batch]),
                }
            )
    return rows


def process_document(spark, c, version_id):
    doc = spark.sql(
        f"SELECT * FROM {c.table('banking_document_registry')} WHERE version_id=:v", args={"v": version_id}
    ).first()
    if doc is None:
        raise ValueError("DOCUMENT_NOT_REGISTERED")
    doc = doc.asDict()
    if doc["status"] in {"READY", "AWAITING_PUBLICATION"}:
        return
    stage = "PARSING"
    try:
        set_status(spark, c, version_id, stage)
        existing = spark.sql(
            f"SELECT parsed_json FROM {c.table('banking_parsed_documents')} WHERE version_id=:v",
            args={"v": version_id},
        ).first()
        if existing:
            parsed = json.loads(existing.parsed_json)
        else:
            # SQL path used intentionally: REST parser has a lower page limit.
            source = spark.read.format("binaryFile").load(doc["source_uri"])
            source.createOrReplaceTempView("banking_input_binary")
            parsed = json.loads(
                spark.sql(
                    "SELECT to_json(ai_parse_document(content, map('version','2.0','descriptionElementTypes',''))) AS parsed_json FROM banking_input_binary"
                )
                .first()
                .parsed_json
            )
            merge_rows(
                spark,
                c,
                "banking_parsed_documents",
                [{"version_id": version_id, "parsed_json": json.dumps(parsed, ensure_ascii=False)}],
                "version_id",
            )
        pages = len(parsed.get("document", {}).get("pages", []))
        if pages > c.max_pages:
            raise ValueError("PAGE_LIMIT_EXCEEDED")
        stage = "STRUCTURING"
        set_status(spark, c, version_id, stage)
        nodes, warnings = build_nodes(parsed, version_id, doc["document_name"])
        if warnings:
            # Visible QA requirement; source remains in Bronze, no fake exact path.
            raise ValueError("STRUCTURE_REVIEW_REQUIRED: " + "; ".join(warnings[:10]))
        chunks = make_chunks(nodes, doc, c.max_chunk_chars)
        if not chunks:
            raise ValueError("CHUNKS_EMPTY")
        if c.use_ai_prep_search:
            stage = "CONTEXTUALIZING"
            set_status(spark, c, version_id, stage)

            def prepare(text):
                row = spark.sql(
                    "SELECT to_json(ai_prep_search(:text, map('version','2.0'))) AS result",
                    args={"text": text},
                ).first()
                return json.loads(row.result)

            chunks = enrich_with_prep(chunks, prepare)
        for row in chunks:
            if len(row["chunk_to_embed"].encode()) >= 30000:
                raise ValueError("EMBEDDING_TEXT_TOO_LARGE")
        stage = "SUMMARIZING"
        set_status(spark, c, version_id, stage)
        summaries = summarize(c, doc, nodes, chunks, DatabricksLLM(c.llm_endpoint)) if c.use_summaries else []
        # Retry is deterministic at version granularity. Published versions are never rebuilt.
        for table in ("banking_documents", "banking_policy_nodes", "banking_policy_summaries"):
            spark.sql(f"DELETE FROM {c.table(table)} WHERE version_id=:v", args={"v": version_id})
        merge_rows(spark, c, "banking_documents", chunks, "chunk_pk")
        merge_rows(
            spark,
            c,
            "banking_policy_nodes",
            [
                {
                    "node_id": n.node_id,
                    "version_id": version_id,
                    "parent_node_id": n.parent_node_id,
                    "node_type": n.kind,
                    "node_title": n.title,
                    "path_text": " > ".join(n.path),
                    "ancestor_ids": n.ancestors,
                }
                for n in nodes
            ],
            "node_id",
        )
        merge_rows(spark, c, "banking_policy_summaries", summaries, "summary_id")
        spark.sql(
            f"UPDATE {c.table('banking_document_registry')} SET page_count=:p, chunk_count=:n, summary_count=:s WHERE version_id=:v",
            args={"p": pages, "n": len(chunks), "s": len(summaries), "v": version_id},
        )
        stage = "INDEXING"
        set_status(spark, c, version_id, stage)
        sync_indexes(
            c,
            {
                "banking_detail_index": {r["chunk_pk"] for r in chunks},
                "banking_summary_index": {r["summary_id"] for r in summaries},
            },
        )
        set_status(spark, c, version_id, "AWAITING_PUBLICATION")
    except Exception:
        set_status(spark, c, version_id, "FAILED", stage)
        raise  # Full traceback is retained in the Databricks Job, not exposed in the browser.


def sync_indexes(c, expected):
    from databricks.ai_search.client import AISearchClient

    client = AISearchClient(disable_notice=True)
    endpoints = client.list_endpoints().get("endpoints", [])
    if not any(e["name"] == c.search_endpoint for e in endpoints):
        client.create_endpoint(name=c.search_endpoint, endpoint_type="STANDARD")
    client.wait_for_endpoint(c.search_endpoint)
    existing = {i["name"] for i in client.list_indexes(c.search_endpoint).get("vector_indexes", [])}
    for suffix, source, key, text in [
        ("banking_detail_index", "banking_documents", "chunk_pk", "chunk_to_embed"),
        ("banking_summary_index", "banking_policy_summaries", "summary_id", "summary_to_embed"),
    ]:
        if suffix == "banking_summary_index" and not c.use_summaries:
            continue
        name = c.table(suffix)
        if name not in existing:
            index = client.create_delta_sync_index(
                endpoint_name=c.search_endpoint,
                index_name=name,
                source_table_name=c.table(source),
                pipeline_type="TRIGGERED",
                primary_key=key,
                embedding_source_column=text,
                embedding_model_endpoint_name=c.embedding_endpoint,
                columns_to_sync=(
                    [key, text, "version_id", "chunk_content", "path_text"]
                    if source == "banking_documents"
                    else [
                        key,
                        text,
                        "version_id",
                        "node_id",
                        "supporting_chunk_ids",
                        "summary_text",
                        "path_text",
                    ]
                ),
            )
        else:
            index = client.get_index(endpoint_name=c.search_endpoint, index_name=name)
            index.sync()
        index.wait_until_ready(timeout=timedelta(minutes=30), wait_for_updates=True)
        # Readiness alone doesn't establish that the newly uploaded rows are searchable.
        deadline = time.monotonic() + 1200
        while True:
            found, last = set(), None
            while True:
                page = index.scan(num_results=1000, last_primary_key=last)
                entries = page.get("data", [])
                if not entries:
                    break
                for entry in entries:
                    fields = {f["key"]: f["value"] for f in entry["fields"]}
                    found.add(str(fields[key]["string_value"]))
                following = page.get("last_primary_key")
                if not following or following == last:
                    break
                last = following
            if expected[suffix].issubset(found):
                break
            if time.monotonic() > deadline:
                raise TimeoutError(f"INDEX_VISIBILITY_TIMEOUT: {name}")
            time.sleep(10)


def publish(spark, c, version_id, effective_from, effective_to=""):
    """Explicit notebook publication after QA; latest upload is not automatically effective."""
    from datetime import date

    start = date.fromisoformat(effective_from)
    if effective_to and date.fromisoformat(effective_to) <= start:
        raise ValueError("effective_to must be later than effective_from")
    doc = spark.sql(
        f"SELECT * FROM {c.table('banking_document_registry')} WHERE version_id=:v", args={"v": version_id}
    ).first()
    if doc is None or doc.status not in {"AWAITING_PUBLICATION", "READY"}:
        raise ValueError("Version must finish indexing and QA first")
    previous = spark.sql(
        f"SELECT * FROM {c.table('banking_publications')} WHERE document_id=:d AND version_id<>:v",
        args={"d": doc.document_id, "v": version_id},
    ).collect()
    for old in previous:
        if (not old.effective_to or old.effective_to > effective_from) and (
            not effective_to or old.effective_from < effective_to
        ):
            raise ValueError(
                "OVERLAPPING_VALIDITY: explicitly close the earlier publication in notebook first"
            )
    merge_rows(
        spark,
        c,
        "banking_publications",
        [
            {
                "document_id": doc.document_id,
                "version_id": version_id,
                "effective_from": effective_from,
                "effective_to": effective_to or None,
            }
        ],
        "version_id",
    )
    set_status(spark, c, version_id, "READY")

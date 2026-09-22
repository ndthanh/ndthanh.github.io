from concurrent.futures import ThreadPoolExecutor
import json
import mlflow

from .vietnamese import query_plan


def decode_search(response):
    """Read manifest; never assume score is column 0 or that requested order is returned."""
    names = [c["name"] for c in response.get("manifest", {}).get("columns", [])]
    return [dict(zip(names, row)) for row in response.get("result", {}).get("data_array", [])]


def as_list(value):
    return json.loads(value) if isinstance(value, str) else (value or [])


def fuse(rankings):
    scores, objects = {}, {}
    for rows in rankings:
        seen = set()
        for rank, row in enumerate(rows, 1):
            key = row["chunk_pk"]
            if key in seen:
                continue
            seen.add(key)
            scores[key] = scores.get(key, 0) + 1 / (60 + rank)
            objects[key] = row
    return [
        {**objects[key], "fusion_score": score} for key, score in sorted(scores.items(), key=lambda x: -x[1])
    ]


class Retriever:
    def __init__(self, config, store, client=None):
        if client is None:
            from databricks.ai_search.client import AISearchClient

            client = AISearchClient(disable_notice=True)
        self.c, self.store, self.client = config, store, client

    def search(self, name, text, versions, summary=False):
        index = self.client.get_index(endpoint_name=self.c.search_endpoint, index_name=self.c.table(name))
        args = dict(
            query_text=text,
            query_type=self.c.query_type,
            filters={"version_id": versions},
            columns=(
                ["summary_id", "version_id", "node_id", "supporting_chunk_ids", "summary_text", "path_text"]
                if summary
                else ["chunk_pk", "version_id", "chunk_content", "path_text"]
            ),
            num_results=3 if summary else self.c.candidate_k,
        )
        if self.c.use_reranker:
            from databricks.ai_search.reranker import DatabricksReranker

            args["reranker"] = DatabricksReranker(
                columns_to_rerank=["summary_text" if summary else "chunk_content", "path_text"]
            )
        return decode_search(index.similarity_search(**args))

    @mlflow.trace(span_type="RETRIEVER")
    def retrieve(self, question, as_of):
        plan = query_plan(question)
        versions = self.store.ready_versions(as_of)
        if not versions:
            return []
        exact = self.store.exact(plan["references"], versions)
        if plan["references"] and not exact:
            return []  # Never substitute a nearby article for a nonexistent explicit reference.
        with ThreadPoolExecutor(max_workers=3) as pool:
            detail = [pool.submit(self.search, "banking_detail_index", q, versions) for q in plan["variants"]]
            summary = (
                pool.submit(self.search, "banking_summary_index", question, versions, True)
                if self.c.use_summaries
                else None
            )
            ranked = [f.result() for f in detail]
            # Explicit references get their own ranking; ambiguous same-number articles remain visible.
            if exact:
                ranked.insert(0, exact)
            if summary:
                for hit in summary.result():
                    # Scope re-search to the selected summary's node ancestry. Do not take first children.
                    index = self.client.get_index(
                        endpoint_name=self.c.search_endpoint, index_name=self.c.table("banking_detail_index")
                    )
                    hit_ids = set(as_list(hit.get("supporting_chunk_ids")))
                    if hit_ids:
                        results = decode_search(
                            index.similarity_search(
                                query_text=question,
                                query_type=self.c.query_type,
                                filters={"chunk_pk": list(hit_ids), "version_id": versions},
                                columns=["chunk_pk", "version_id"],
                                num_results=5,
                            )
                        )
                        ranked.append(results)
        candidates = fuse(ranked)
        if exact:
            exact_ids = {r["chunk_pk"] for r in exact}
            candidates = exact + [r for r in candidates if r["chunk_pk"] not in exact_ids]
        # Hydrate original evidence from Delta, not generated context in the vector index.
        originals = {
            r["chunk_pk"]: r for r in self.store.fetch_chunks([c["chunk_pk"] for c in candidates], versions)
        }
        seeds = [originals[r["chunk_pk"]] for r in candidates if r["chunk_pk"] in originals][
            : self.c.evidence_k
        ]
        expanded = self.store.related(seeds[:4], versions)
        selected, seen, total = [], set(), 0
        for row in seeds + expanded:
            if row["chunk_pk"] in seen:
                continue
            if total + len(row["chunk_content"]) > self.c.max_context_chars:
                continue
            seen.add(row["chunk_pk"])
            total += len(row["chunk_content"])
            # MLflow's retriever output document schema.
            selected.append({"page_content": row["chunk_content"], "metadata": row})
        return selected

"""Bounded, parameterized Statement Execution API; no free-form model SQL."""

import time

SCHEMAS = {
    "banking_document_registry": "version_id STRING, document_id STRING, document_name STRING, source_uri STRING, checksum STRING, status STRING, error_code STRING, page_count INT, chunk_count INT, summary_count INT, job_run_id STRING, created_at STRING, updated_at STRING",
    "banking_parsed_documents": "version_id STRING, parsed_json STRING",
    # Keep the assignment's exact table name and four required columns.
    "banking_documents": "chunk_pk STRING, document_id STRING, document_name STRING, chunk_id STRING, chunk_content STRING, version_id STRING, node_id STRING, parent_node_id STRING, ancestor_ids ARRAY<STRING>, path_text STRING, article STRING, clause STRING, point STRING, chunk_to_embed STRING, search_folded STRING, start_page INT, end_page INT, element_ids ARRAY<STRING>, source_uri STRING, legal_markers ARRAY<STRING>, chunk_position INT, previous_chunk_id STRING, next_chunk_id STRING",
    "banking_policy_nodes": "node_id STRING, version_id STRING, parent_node_id STRING, node_type STRING, node_title STRING, path_text STRING, ancestor_ids ARRAY<STRING>",
    "banking_policy_summaries": "summary_id STRING, version_id STRING, node_id STRING, parent_node_id STRING, node_title STRING, path_text STRING, summary_text STRING, summary_to_embed STRING, supporting_chunk_ids STRING",
    "banking_publications": "document_id STRING, version_id STRING, effective_from STRING, effective_to STRING",
}


class SqlStore:
    def __init__(self, config, workspace=None):
        if workspace is None:
            from databricks.sdk import WorkspaceClient

            workspace = WorkspaceClient()
        self.w, self.c = workspace, config

    def query(self, statement, params=None):
        from databricks.sdk.service.sql import StatementParameterListItem

        items = [
            StatementParameterListItem(name=k, value=str(v), type="STRING") for k, v in (params or {}).items()
        ]
        response = self.w.statement_execution.execute_statement(
            warehouse_id=self.c.warehouse_id,
            statement=statement,
            parameters=items,
            wait_timeout="10s",
            row_limit=10000,
        )
        deadline = time.monotonic() + 120
        while response.status.state.value in {"PENDING", "RUNNING"}:
            if time.monotonic() > deadline:
                self.w.statement_execution.cancel_execution(response.statement_id)
                raise TimeoutError("SQL_TIMEOUT: statement exceeded 120s")
            time.sleep(1)
            response = self.w.statement_execution.get_statement(response.statement_id)
        if response.status.state.value != "SUCCEEDED":
            error = response.status.error
            raise RuntimeError(
                f"SQL_ERROR: {error.error_code if error else 'unknown'}; statement_id={response.statement_id}"
            )
        if not response.result or not response.manifest:
            return []
        if response.manifest.truncated:
            raise RuntimeError("SQL_TRUNCATED: reduce scope; refusing incomplete evidence")
        columns = [c.name for c in response.manifest.schema.columns]
        result, chunk = [], response.result
        while chunk:
            result.extend(dict(zip(columns, row)) for row in chunk.data_array or [])
            chunk = (
                self.w.statement_execution.get_statement_result_chunk_n(
                    response.statement_id, chunk.next_chunk_index
                )
                if chunk.next_chunk_index is not None
                else None
            )
        return result

    def documents(self):
        return self.query(
            f"SELECT * FROM {self.c.table('banking_document_registry')} ORDER BY created_at DESC LIMIT 200"
        )

    def document(self, version_id):
        rows = self.query(
            f"SELECT * FROM {self.c.table('banking_document_registry')} WHERE version_id=:v",
            {"v": version_id},
        )
        if not rows:
            raise KeyError(version_id)
        return rows[0]

    def ready_versions(self, as_of):
        return [
            r["version_id"]
            for r in self.query(
                f"""
            SELECT p.version_id FROM {self.c.table("banking_publications")} p
            JOIN {self.c.table("banking_document_registry")} d ON d.version_id=p.version_id
            WHERE d.status='READY' AND CAST(p.effective_from AS DATE)<=CAST(:day AS DATE)
            AND (p.effective_to IS NULL OR CAST(p.effective_to AS DATE)>CAST(:day AS DATE))
        """,
                {"day": as_of},
            )
        ]

    def fetch_chunks(self, ids, versions):
        if not ids or not versions:
            return []
        params = {f"i{i}": x for i, x in enumerate(dict.fromkeys(ids))}
        vparams = {f"v{i}": x for i, x in enumerate(versions)}
        return self.query(
            f"SELECT * FROM {self.c.table('banking_documents')} WHERE chunk_pk IN ({','.join(':' + k for k in params)}) AND version_id IN ({','.join(':' + k for k in vparams)})",
            params | vparams,
        )

    def exact(self, refs, versions):
        if not refs or not versions:
            return []
        params = {f"v{i}": v for i, v in enumerate(versions)}
        conditions = [f"version_id IN ({','.join(':' + k for k in params)})"]
        for key in ("article", "clause", "point"):
            if key in refs:
                conditions.append(f"{key}=:ref_{key}")
                params[f"ref_{key}"] = refs[key]
        return self.query(
            f"SELECT * FROM {self.c.table('banking_documents')} WHERE {' AND '.join(conditions)} ORDER BY chunk_position LIMIT 40",
            params,
        )

    def related(self, chunks, versions):
        """Ancestors, adjacent chunks, and sibling points under the same clause."""
        import json

        nodes, ids, clauses = set(), set(), set()
        for c in chunks:
            ancestors = c.get("ancestor_ids") or []
            if isinstance(ancestors, str):
                ancestors = json.loads(ancestors)
            nodes.update(ancestors[-2:])
            if c.get("clause"):
                clauses.add(c["parent_node_id"] if c.get("point") else c["node_id"])
            ids.update(x for x in (c.get("previous_chunk_id"), c.get("next_chunk_id")) if x)
        rows = self.fetch_chunks(list(ids), versions)
        if clauses:
            p = {f"cl{i}": n for i, n in enumerate(sorted(clauses))}
            v = {f"v{i}": x for i, x in enumerate(versions)}
            rows += self.query(
                f"SELECT * FROM {self.c.table('banking_documents')} WHERE parent_node_id IN ({','.join(':' + k for k in p)}) AND version_id IN ({','.join(':' + k for k in v)}) ORDER BY chunk_position LIMIT 24",
                p | v,
            )
        if nodes:
            p = {f"n{i}": n for i, n in enumerate(nodes)}
            v = {f"v{i}": x for i, x in enumerate(versions)}
            rows += self.query(
                f"SELECT * FROM {self.c.table('banking_documents')} WHERE node_id IN ({','.join(':' + k for k in p)}) AND version_id IN ({','.join(':' + k for k in v)}) ORDER BY chunk_position LIMIT 12",
                p | v,
            )
        return rows


def setup_tables(spark, config):
    # Catalog is intentionally pre-existing: workspace admin selects the catalog.
    spark.sql(f"CREATE SCHEMA IF NOT EXISTS {config.catalog}.{config.schema}")
    spark.sql(f"CREATE VOLUME IF NOT EXISTS {config.catalog}.{config.schema}.{config.volume}")
    for name, ddl in SCHEMAS.items():
        spark.sql(
            f"CREATE TABLE IF NOT EXISTS {config.table(name)} ({ddl}) USING DELTA TBLPROPERTIES ('delta.enableChangeDataFeed'='true')"
        )


def merge_rows(spark, config, name, rows, key):
    if not rows:
        return
    frame = spark.createDataFrame(rows, schema=SCHEMAS[name])
    view = f"incoming_{name}"
    frame.createOrReplaceTempView(view)
    spark.sql(
        f"MERGE INTO {config.table(name)} t USING {view} s ON t.{key}=s.{key} WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *"
    )

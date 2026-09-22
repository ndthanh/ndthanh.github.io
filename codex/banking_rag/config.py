from dataclasses import asdict, dataclass
import json
import os
from pathlib import Path
import re


@dataclass
class Config:
    catalog: str = "workspace"
    schema: str = "banking_rag_vi"
    volume: str = "documents"
    warehouse_id: str = ""
    search_endpoint: str = "banking-vi-search"
    embedding_endpoint: str = ""
    llm_endpoint: str = ""
    serving_endpoint: str = "banking-vi-agent"
    experiment: str = "/Shared/banking-rag-vi"
    ingestion_job_id: int = 0
    query_type: str = "ANN"
    use_summaries: bool = True
    use_reranker: bool = False
    use_ai_prep_search: bool = False
    candidate_k: int = 12
    evidence_k: int = 8
    max_chunk_chars: int = 2200
    max_context_chars: int = 24000
    max_upload_mb: int = 50
    max_pages: int = 500

    def __post_init__(self):
        for value in (self.catalog, self.schema, self.volume):
            if not re.fullmatch(r"[A-Za-z_][A-Za-z0-9_]*", value):
                raise ValueError("Catalog/schema/volume must be simple SQL identifiers")
        if self.query_type not in {"ANN", "HYBRID"}:
            raise ValueError("query_type must be ANN or HYBRID")
        if not 300 <= self.max_chunk_chars <= 6000:
            raise ValueError("max_chunk_chars must be 300..6000")

    def table(self, name):
        if not re.fullmatch(r"[a-z_]+", name):
            raise ValueError("Invalid table name")
        return f"{self.catalog}.{self.schema}.{name}"

    @property
    def volume_path(self):
        return f"/Volumes/{self.catalog}/{self.schema}/{self.volume}"

    @classmethod
    def load(cls, path=None):
        path = Path(path or os.getenv("BANKING_CONFIG", "config.local.json"))
        values = json.loads(path.read_text()) if path.exists() else {}
        for field, env in {
            "warehouse_id": "DATABRICKS_WAREHOUSE_ID",
            "ingestion_job_id": "BANKING_JOB_ID",
            "serving_endpoint": "BANKING_SERVING_ENDPOINT",
        }.items():
            if os.getenv(env):
                values[field] = int(os.environ[env]) if field == "ingestion_job_id" else os.environ[env]
        return cls(**values)

    def validate_remote(self):
        for name in ("warehouse_id", "embedding_endpoint", "llm_endpoint"):
            value = getattr(self, name)
            if not value or "REPLACE" in value:
                raise ValueError(f"Configure {name} in config.local.json")

    def as_dict(self):
        return asdict(self)

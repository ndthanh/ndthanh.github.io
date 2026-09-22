# Databricks notebook source
# MAGIC %md
# MAGIC Run from the imported project's notebooks directory. Runtime 18.2+ or a compatible
# MAGIC serverless environment, Unity Catalog enabled. Read README before creating resources.
# COMMAND ----------
# MAGIC %pip install -r ../requirements-deploy.txt
# COMMAND ----------
dbutils.library.restartPython()
# COMMAND ----------
from pathlib import Path
import sys
ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
sys.path.insert(0, str(ROOT))
from banking_rag.config import Config
dbutils.widgets.text("config_path", str(ROOT / "config.local.json"))
c = Config.load(dbutils.widgets.get("config_path"))
c.validate_remote()
# COMMAND ----------

# MAGIC %md
# MAGIC SYNTHETIC ONLY: bypasses OCR. Use a separate sandbox schema, never alongside real policies.
# COMMAND ----------
import json
from banking_rag.fixtures import fixture
from banking_rag.storage import merge_rows
from banking_rag.pipeline import now, process_document
dbutils.widgets.dropdown("confirm_synthetic", "no", ["no", "yes"])
if dbutils.widgets.get("confirm_synthetic") != "yes":
    raise ValueError("Select confirm_synthetic=yes only in a test schema.")
doc, parsed = fixture()
registry = {**doc, "checksum": "synthetic-v1", "status": "QUEUED", "error_code": "",
    "page_count": 2, "chunk_count": 0, "summary_count": 0, "job_run_id": "",
    "created_at": now(), "updated_at": now()}
existing = spark.sql(f"SELECT version_id FROM {c.table('banking_document_registry')} WHERE version_id=:v", args={"v": doc["version_id"]}).count()
if not existing:
    merge_rows(spark, c, "banking_document_registry", [registry], "version_id")
    merge_rows(spark, c, "banking_parsed_documents", [{"version_id": doc["version_id"], "parsed_json": json.dumps(parsed, ensure_ascii=False)}], "version_id")
process_document(spark, c, doc["version_id"])
print("Synthetic version_id:", doc["version_id"])

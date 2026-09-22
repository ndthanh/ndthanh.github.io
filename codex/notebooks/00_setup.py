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

from databricks.sdk import WorkspaceClient
from banking_rag.storage import setup_tables
w = WorkspaceClient()
print("Workspace:", w.config.host)
print("Warehouse:", w.warehouses.get(c.warehouse_id).name)
for endpoint in (c.embedding_endpoint, c.llm_endpoint):
    print("Model endpoint:", w.serving_endpoints.get(endpoint).name)
setup_tables(spark, c)
print("Tables and volume created. No policy has been published.")
display(spark.sql(f"SHOW TABLES IN {c.catalog}.{c.schema}"))
# COMMAND ----------
# MAGIC %md
# MAGIC Before uploading 200–300 pages, test one small real PDF with ai_parse_document.
# MAGIC Verify cloud/region access, OCR quality, Unicode, tables, and page mapping.
# MAGIC Runtime/schema failures must be resolved before a paid full-corpus run.

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
# MAGIC Configure this notebook as the single task of an ingestion Job, max concurrent runs=1,
# MAGIC queue enabled. The App supplies version_id as notebook_params.
# MAGIC Retry FAILED versions from this notebook after inspecting/fixing the Job log.
# COMMAND ----------
import re
from banking_rag.pipeline import process_document
dbutils.widgets.text("version_id", "")
version_id = dbutils.widgets.get("version_id")
if not re.fullmatch(r"[a-f0-9]{32}", version_id):
    raise ValueError("Provide a registered 32-character version_id.")
process_document(spark, c, version_id)
display(spark.sql(f"SELECT * FROM {c.table('banking_document_registry')} WHERE version_id=:v", args={"v": version_id}))

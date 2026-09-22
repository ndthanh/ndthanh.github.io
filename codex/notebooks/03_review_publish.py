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

import json
from banking_rag.pipeline import publish
dbutils.widgets.text("version_id", "")
dbutils.widgets.text("effective_from", "")
dbutils.widgets.text("effective_to_exclusive", "")
dbutils.widgets.dropdown("publish_after_review", "no", ["no", "yes"])
version_id = dbutils.widgets.get("version_id")
if not version_id:
    display(spark.sql(f"SELECT version_id,document_name,status,page_count,chunk_count FROM {c.table('banking_document_registry')}"))
    raise ValueError("Select a version_id from the registry.")
# COMMAND ----------
display(spark.sql(f"SELECT node_type,path_text,node_id,parent_node_id FROM {c.table('banking_policy_nodes')} WHERE version_id=:v", args={"v": version_id}))
display(spark.sql(f"SELECT chunk_pk,path_text,start_page,end_page,chunk_content FROM {c.table('banking_documents')} WHERE version_id=:v ORDER BY chunk_position", args={"v": version_id}))
display(spark.sql(f"SELECT summary_text,supporting_chunk_ids FROM {c.table('banking_policy_summaries')} WHERE version_id=:v", args={"v": version_id}))
# COMMAND ----------
# MAGIC %md
# MAGIC Compare original PDF with pages/chunks, especially tables, phủ định, ngoại lệ, số tiền.
# MAGIC Verify document identity and actual validity dates. DOCX page numbers may be parser-rendered.
# MAGIC To supersede a published version: manually set its effective_to to the next version's
# MAGIC effective_from, after legal review. Intervals are [from, to). Never infer this from upload time.
# COMMAND ----------
if dbutils.widgets.get("publish_after_review") == "yes":
    publish(spark, c, version_id, dbutils.widgets.get("effective_from"), dbutils.widgets.get("effective_to_exclusive"))
    print("Published:", version_id)
else:
    print("Review only. No publication changed.")

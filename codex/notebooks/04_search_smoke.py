# Databricks notebook source
# MAGIC %pip install -r ../requirements-deploy.txt
# COMMAND ----------
dbutils.library.restartPython()
# COMMAND ----------
from pathlib import Path
import sys
import json
from datetime import date
ROOT = Path.cwd().parent if Path.cwd().name == "notebooks" else Path.cwd()
sys.path.insert(0, str(ROOT))
from banking_rag.config import Config
from banking_rag.storage import SqlStore
from banking_rag.retrieval import Retriever
from banking_rag.vietnamese import query_plan
dbutils.widgets.text("config_path", str(ROOT / "config.local.json"))
dbutils.widgets.text("question", "Hồ sơ nhận biết khách hàng cần những gì?")
dbutils.widgets.text("as_of", date.today().isoformat())
c = Config.load(dbutils.widgets.get("config_path"))
c.validate_remote()
store = SqlStore(c)
retriever = Retriever(c, store)
question = dbutils.widgets.get("question")
versions = store.ready_versions(dbutils.widgets.get("as_of"))
if not versions:
    raise ValueError("No published effective version; run notebook 03 first.")
print("NLU:", json.dumps(query_plan(question), ensure_ascii=False, indent=2))
# COMMAND ----------
# Raw similarity-search results (including scores) for Task 2 screenshot.
hits = retriever.search("banking_detail_index", question, versions)
print(json.dumps(hits, ensure_ascii=False, indent=2))
if hits:
    display(spark.createDataFrame([{k: str(v) for k, v in row.items()} for row in hits]))
# COMMAND ----------
print(json.dumps(retriever.retrieve(question, dbutils.widgets.get("as_of")), ensure_ascii=False, indent=2))
# COMMAND ----------
# MAGIC %md
# MAGIC Also test: How can a customer open a current account?
# MAGIC What documents are required for KYC verification?
# MAGIC What is the approval process for personal loans?
# MAGIC Missing policy coverage must yield no answer, not invented procedures.

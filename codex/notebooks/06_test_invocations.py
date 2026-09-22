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
import json
w = WorkspaceClient()
response = w.api_client.do("POST", f"/serving-endpoints/{c.serving_endpoint}/invocations",
    body={"input": [{"role": "user", "content": "Hồ sơ KYC cần những gì?"}], "custom_inputs": {"as_of": "2026-09-19"}})
print(json.dumps(response, ensure_ascii=False, indent=2))
# Capture this output for Task 5; no browser PAT/token required.

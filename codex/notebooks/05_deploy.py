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

import mlflow
from databricks import agents
from mlflow.models.resources import DatabricksVectorSearchIndex, DatabricksServingEndpoint, DatabricksSQLWarehouse, DatabricksTable
mlflow.set_tracking_uri("databricks")
mlflow.set_registry_uri("databricks-uc")
mlflow.set_experiment(c.experiment)  # Shared experiment, NOT a Git-folder experiment.
resources = [
    DatabricksVectorSearchIndex(index_name=c.table("banking_detail_index")),
    DatabricksServingEndpoint(endpoint_name=c.embedding_endpoint),
    DatabricksServingEndpoint(endpoint_name=c.llm_endpoint),
    DatabricksSQLWarehouse(warehouse_id=c.warehouse_id),
]
if c.use_summaries:
    resources.append(DatabricksVectorSearchIndex(index_name=c.table("banking_summary_index")))
resources += [DatabricksTable(table_name=c.table(t)) for t in (
    "banking_documents", "banking_document_registry", "banking_publications")]
input_example = {"input": [{"role": "user", "content": "Hồ sơ KYC cần những gì?"}], "custom_inputs": {"as_of": "2026-09-19"}}
with mlflow.start_run(run_name="register-banking-agent"):
    logged = mlflow.pyfunc.log_model(
        name="banking_agent", python_model=str(ROOT / "banking_rag" / "agent.py"),
        code_paths=[str(ROOT / "banking_rag")], model_config=c.as_dict(),
        input_example=input_example, resources=resources,
        pip_requirements=str(ROOT / "requirements.txt"))
model_name = c.table("banking_agent")
version = mlflow.register_model(logged.model_uri, model_name)
print("Registered:", model_name, version.version)
# COMMAND ----------
# MAGIC %md
# MAGIC This cell creates/updates paid Model Serving resources. The identity running it must
# MAGIC have the permissions described in README. Automatic resource auth is declared above.
# COMMAND ----------
dbutils.widgets.dropdown("deploy_endpoint", "no", ["no", "yes"])
if dbutils.widgets.get("deploy_endpoint") == "yes":
    deployment = agents.deploy(model_name, int(version.version), endpoint_name=c.serving_endpoint, scale_to_zero=True)
    print(deployment)
else:
    print("Registered only. Select deploy_endpoint=yes to deploy.")

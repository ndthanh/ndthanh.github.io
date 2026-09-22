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
import time
import statistics
import pandas as pd
import mlflow
from banking_rag.llm import DatabricksLLM
from banking_rag.retrieval import Retriever
from banking_rag.storage import SqlStore
from banking_rag.service import BankingService
from mlflow.genai.scorers import scorer
dbutils.widgets.text("eval_file", str(ROOT / "evaluation" / "synthetic.json"))
dbutils.widgets.dropdown("run_paid_llm_judges", "no", ["no", "yes"])
mlflow.set_tracking_uri("databricks")
mlflow.set_experiment(c.experiment)
service = BankingService(Retriever(c, SqlStore(c)), DatabricksLLM(c.llm_endpoint))
cases = json.loads(Path(dbutils.widgets.get("eval_file")).read_text())
rows = []
# COMMAND ----------
with mlflow.start_run(run_name=f"vi-{c.query_type}-summary-{c.use_summaries}") as run:
    mlflow.log_params({"query_type": c.query_type, "summary": c.use_summaries, "prep": c.use_ai_prep_search, "reranker": c.use_reranker, "embedding_endpoint": c.embedding_endpoint, "llm_endpoint": c.llm_endpoint})
    for case in cases:
        output = service.answer(**case["inputs"])
        expected = case["expectations"]
        gold = set(expected.get("expected_chunk_ids", []))
        found = set(output["retrieved_chunks"])
        recall = len(gold & found) / len(gold) if gold else None
        rows.append({"question": case["inputs"]["question"], "answer": output["answer"],
            "latency": output["latency_ms"], "retrieved_chunks": output["retrieved_chunks"],
            "sources": output["sources"], "expected_status": expected["status"], "actual_status": output["status"],
            "status_match": output["status"] == expected["status"], "retrieval_recall": recall})
    mlflow.log_table(pd.DataFrame(rows), artifact_file="evaluation_answers.json")
    mlflow.log_metric("status_accuracy", sum(r["status_match"] for r in rows)/len(rows))
    mlflow.log_metric("latency_mean_ms", statistics.mean(r["latency"] for r in rows))
    ordered = sorted(r["latency"] for r in rows)
    mlflow.log_metric("latency_p95_ms", ordered[min(len(ordered)-1, int(len(ordered)*.95))])
    recalls = [r["retrieval_recall"] for r in rows if r["retrieval_recall"] is not None]
    if recalls:
        mlflow.log_metric("evidence_recall_mean", statistics.mean(recalls))
    print("MLflow run_id:", run.info.run_id)
display(spark.createDataFrame([{k: str(v) for k,v in r.items()} for r in rows]))
# COMMAND ----------
@scorer
def status_matches(outputs, expectations):
    return outputs["status"] == expectations["status"]

@scorer
def citation_present(outputs):
    return outputs["status"] != "answered" or len(outputs["sources"]) > 0

def predict_fn(question, as_of):
    return service.answer(question, as_of)

# Explicit scorers and fresh traces. This invokes the agent again and incurs LLM cost.
scorers = [status_matches, citation_present]
if dbutils.widgets.get("run_paid_llm_judges") == "yes":
    from mlflow.genai.scorers import RetrievalGroundedness, RelevanceToQuery
    scorers += [RetrievalGroundedness(model=f"databricks:/{c.llm_endpoint}"),
                RelevanceToQuery(model=f"databricks:/{c.llm_endpoint}")]
evaluation = mlflow.genai.evaluate(data=cases, predict_fn=predict_fn, scorers=scorers)
print(evaluation.metrics)
# COMMAND ----------
# MAGIC %md
# MAGIC Synthetic pass is not legal accuracy. Add SME-reviewed real gold questions/chunk IDs.
# MAGIC Compare ANN detail-only vs summary+detail, then HYBRID/reranker; prep changes require reingestion.

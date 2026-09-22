import os

os.environ["MLFLOW_DISABLE_AGENT_HINT"] = "1"
os.environ["BANKING_DEMO"] = "1"

import mlflow

mlflow.tracing.disable()

import uuid
import mlflow
from mlflow.pyfunc import ResponsesAgent
from mlflow.types.responses import ResponsesAgentRequest, ResponsesAgentResponse

from banking_rag.config import Config
from banking_rag.llm import DatabricksLLM
from banking_rag.retrieval import Retriever
from banking_rag.service import BankingService
from banking_rag.storage import SqlStore


class BankingAgent(ResponsesAgent):
    def __init__(self, config=None):
        self.config = config
        self.service = None

    def predict(self, request: ResponsesAgentRequest) -> ResponsesAgentResponse:
        if self.service is None:
            c = self.config or Config(**mlflow.models.ModelConfig().to_dict())
            c.validate_remote()
            self.service = BankingService(Retriever(c, SqlStore(c)), DatabricksLLM(c.llm_endpoint))
        user = next((i for i in reversed(request.input) if getattr(i, "role", None) == "user"), None)
        if user is None:
            raise ValueError("A user input is required")
        content = user.content
        if not isinstance(content, str):
            content = " ".join(
                x.get("text", "") if isinstance(x, dict) else getattr(x, "text", "") for x in content
            )
        if not content.strip() or len(content) > 4000:
            raise ValueError("Question must be 1..4000 characters")
        answer = self.service.answer(content, (request.custom_inputs or {}).get("as_of"))
        return ResponsesAgentResponse(
            output=[self.create_text_output_item(text=answer["answer"], id=str(uuid.uuid4()))],
            custom_outputs=answer,
        )


mlflow.models.set_model(BankingAgent())

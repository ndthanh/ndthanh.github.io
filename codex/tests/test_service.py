from copy import deepcopy
from unittest.mock import Mock
import pytest
from banking_rag.service import BankingService, validate_claims, FALLBACK
from banking_rag.agent import BankingAgent
from mlflow.types.responses import ResponsesAgentRequest

SOURCE = {"id": "S1", "source_content": "Khách hàng không được sử dụng giấy tờ hết hiệu lực."}
DRAFT = {
    "status": "answered",
    "claims": [
        {
            "text": "Không chấp nhận giấy tờ hết hiệu lực.",
            "evidence": [{"id": "S1", "quote": "không được sử dụng giấy tờ hết hiệu lực."}],
        }
    ],
}


def test_exact_quote_required():
    assert validate_claims(DRAFT, [SOURCE])
    draft = deepcopy(DRAFT)
    draft["claims"][0]["evidence"][0]["quote"] = "được chấp nhận mọi giấy tờ"
    assert not validate_claims(draft, [SOURCE])


def test_forged_source_rejected():
    draft = deepcopy(DRAFT)
    draft["claims"][0]["evidence"][0]["id"] = "S999"
    assert not validate_claims(draft, [SOURCE])


def test_no_sources_no_llm_call():
    r, llm = Mock(), Mock()
    r.retrieve.return_value = []
    answer = BankingService(r, llm).answer("Hồ sơ KYC?", "2026-09-19")
    assert answer["answer"] == FALLBACK
    llm.json.assert_not_called()


def test_infra_failure_not_disguised_as_no_answer():
    r = Mock()
    r.retrieve.side_effect = RuntimeError("endpoint down")
    with pytest.raises(RuntimeError, match="endpoint down"):
        BankingService(r, Mock()).answer("Hồ sơ KYC?", "2026-09-19")


@pytest.mark.parametrize(
    "question", ["Vậy còn trường hợp đó?", "Hồ sơ tại 01/01/2026?", "Tổng hợp tất cả quy định"]
)
def test_unsafe_scope_clarified(question):
    r, llm = Mock(), Mock()
    result = BankingService(r, llm).answer(question, "2026-09-19")
    assert result["status"] == "needs_clarification"
    r.retrieve.assert_not_called()


def evidence():
    return [
        {
            "page_content": SOURCE["source_content"],
            "metadata": {
                "chunk_pk": "c1",
                "document_name": "Test",
                "version_id": "v1",
                "path_text": "Điều 1",
                "start_page": 1,
                "end_page": 1,
            },
        }
    ]


def test_verified_answer_has_source_citation():
    r, llm = Mock(), Mock()
    r.retrieve.return_value = evidence()
    llm.json.side_effect = [DRAFT, {"supported": True}]
    answer = BankingService(r, llm).answer("Có chấp nhận giấy tờ hết hiệu lực?", "2026-09-19")
    assert answer["status"] == "answered" and "[S1]" in answer["answer"]
    assert answer["sources"][0]["chunk_pk"] == "c1"


def test_verifier_rejects_even_with_valid_quote():
    r, llm = Mock(), Mock()
    r.retrieve.return_value = evidence()
    llm.json.side_effect = [DRAFT, {"supported": False}]
    assert BankingService(r, llm).answer("Hồ sơ?", "2026-09-19")["answer"] == FALLBACK


def test_responses_agent_contract():
    agent = BankingAgent()
    agent.service = Mock()
    agent.service.answer.return_value = {"answer": FALLBACK, "sources": [], "status": "insufficient"}
    response = agent.predict(
        ResponsesAgentRequest(
            input=[{"role": "user", "content": "KYC?"}], custom_inputs={"as_of": "2026-09-19"}
        )
    )
    assert response.custom_outputs["answer"] == FALLBACK
    assert response.model_dump()["output"][0]["content"][0]["text"] == FALLBACK

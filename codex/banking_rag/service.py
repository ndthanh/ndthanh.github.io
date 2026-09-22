from datetime import date
import re
import time

import mlflow

from .llm import ANSWER_PROMPT, VERIFY_PROMPT
from .vietnamese import normalize, query_plan

FALLBACK = "I cannot find relevant information in the policy documents."


def validate_claims(result, sources):
    if result.get("status") != "answered" or not result.get("claims"):
        return False
    allowed = {s["id"]: s["source_content"] for s in sources}
    if len(result["claims"]) > 16:
        return False
    for claim in result["claims"]:
        if not isinstance(claim.get("text"), str) or not claim["text"].strip() or not claim.get("evidence"):
            return False
        for evidence in claim["evidence"]:
            quote, sid = evidence.get("quote"), evidence.get("id")
            if sid not in allowed or not isinstance(quote, str) or len(quote.strip()) < 8:
                return False
            if normalize(quote) not in normalize(allowed[sid]):
                return False
    return True


class BankingService:
    def __init__(self, retriever, llm):
        self.retriever, self.llm = retriever, llm

    @mlflow.trace(name="banking_answer", span_type="AGENT")
    def answer(self, question, as_of=None):
        start = time.monotonic()
        plan = query_plan(question)
        as_of = as_of or date.today().isoformat()
        date.fromisoformat(as_of)
        result = {
            "answer": FALLBACK,
            "sources": [],
            "fallback_used": True,
            "status": "insufficient",
            "retrieved_chunks": [],
            "as_of": as_of,
            "query_plan": plan,
        }
        # A date in a question is not silently interpreted as the query's policy effective date.
        if plan["dates"]:
            result.update(
                answer="Bạn hãy chọn ngày hiệu lực trong ô ‘Tra cứu tại ngày’. Ngày trong câu hỏi cần được xác định là ngày hiệu lực hay ngày giao dịch; vui lòng diễn đạt rõ và bỏ ngày khỏi câu hỏi sau khi chọn.",
                fallback_used=False,
                status="needs_clarification",
            )
        elif re.search(r"^(còn|vậy|thế|trường hợp đó|nó|họ)\b", plan["question"], re.I):
            result.update(
                answer="Bạn vui lòng nêu lại đối tượng và điều khoản cần tra cứu trong câu hỏi này.",
                fallback_used=False,
                status="needs_clarification",
            )
        elif "global" in plan["flags"]:
            result.update(
                answer="Tra cứu top-k chưa bảo đảm liệt kê toàn bộ văn bản. Bạn vui lòng giới hạn một điều khoản hoặc một tình huống cụ thể để tôi đối chiếu nguồn.",
                fallback_used=False,
                status="needs_clarification",
            )
        else:
            docs = self.retriever.retrieve(plan["question"], as_of)
            result["retrieved_chunks"] = [d["metadata"]["chunk_pk"] for d in docs]
            sources = [
                {"id": f"S{i + 1}", "source_content": d["page_content"], **d["metadata"]}
                for i, d in enumerate(docs)
            ]
            if sources:
                with mlflow.start_span(name="generate_claims", span_type="LLM") as span:
                    span.set_inputs({"question": question, "sources": sources})
                    draft = self.llm.json(
                        ANSWER_PROMPT, {"question": question, "as_of": as_of, "sources": sources}
                    )
                    span.set_outputs(draft)
                if draft.get("status") == "needs_clarification" and draft.get("clarification"):
                    result.update(
                        answer=str(draft["clarification"])[:1000],
                        status="needs_clarification",
                        fallback_used=False,
                    )
                elif validate_claims(draft, sources):
                    with mlflow.start_span(name="verify_claims", span_type="LLM") as span:
                        payload = {"question": question, "claims": draft["claims"], "sources": sources}
                        span.set_inputs(payload)
                        checked = self.llm.json(VERIFY_PROMPT, payload)
                        span.set_outputs(checked)
                    if checked.get("supported") is True:
                        used = {e["id"] for c in draft["claims"] for e in c["evidence"]}
                        lines = [
                            c["text"]
                            + " "
                            + " ".join(f"[{i}]" for i in dict.fromkeys(e["id"] for e in c["evidence"]))
                            for c in draft["claims"]
                        ]
                        result.update(
                            answer="\n\n".join(lines),
                            fallback_used=False,
                            status="answered",
                            sources=[
                                {
                                    k: s[k]
                                    for k in (
                                        "id",
                                        "chunk_pk",
                                        "document_name",
                                        "version_id",
                                        "path_text",
                                        "start_page",
                                        "end_page",
                                        "source_content",
                                    )
                                }
                                for s in sources
                                if s["id"] in used
                            ],
                        )
        result["latency_ms"] = round((time.monotonic() - start) * 1000)
        return result

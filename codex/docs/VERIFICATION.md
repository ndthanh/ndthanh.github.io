# Verification — 19/09/2026

## Đã chạy local

- Python 3.11, dependency SDK/MLflow chính theo requirements.
- `pytest -q`: **43 passed**; 2 deprecation warnings từ Starlette/httpx/anyio test client.
- `ruff check banking_rag app.py tests`: passed.
- `python -m compileall -q banking_rag app.py notebooks`: passed.
- `node --check static/app.js`: passed.
- Kiểm tra browser desktop: render welcome/sidebar/date/composer, chọn suggestion,
  gửi câu hỏi, nhận thông báo demo không giả câu trả lời nghiệp vụ, không có JS console error.
- Đối chiếu signature SDK: AISearchClient, scan/wait_until_ready, Files upload,
  MLflow ResponsesAgent/ModelConfig/resources, agents.deploy.

Tests bao gồm NFC, điểm d/đ, alias, query flags; cây pháp lý/page mapping/IDs;
bảng và giữ nguyên nguồn khi contextual enrichment; no-answer, forged citation,
verifier reject, API contract; tham số SQL, pagination, lỗi/truncation; index scan
schema; phạm vi phiên bản, file validation và same-origin API writes.

## Chưa được xác minh

- Không có workspace credentials hoặc PDF thật: chưa chạy Spark/UC/AI functions,
  embedding, Vector Search, automatic resource auth, MLflow trên Databricks hoặc deployment.
- Chưa benchmark model tiếng Việt, OCR, cross-page tables, retrieval/generation quality,
  latency/cost; chưa có SME gold set hay kết quả đạt quality gate.
- Chưa kiểm thử browser end-to-end upload lên Databricks và source popup với phản hồi thật.
- Chưa load test nhiều người dùng, mobile device QA hoặc security audit production.

Đây là platform-test-ready implementation, không phải tuyên bố đã vận hành trên Databricks.
Mốc tiếp theo: config → notebook 00 → fixture 01 → review/publish 03 → search/eval 04 → deploy/test 05/06 → App.

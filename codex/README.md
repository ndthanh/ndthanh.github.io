# BCT Banking Knowledge Assistant — Databricks / tiếng Việt

Khung chạy thật trên Databricks cho 4–5 PDF/DOCX × 200–300 trang. Có ingestion,
cây Điều/Khoản/Điểm, Detail + Summary indexes, Agent, MLflow, Model Serving và web App.

**Trạng thái:** code + kiểm thử local; chưa deploy/chạy OCR, Vector Search hoặc LLM trên
workspace của bạn. Chưa có PDF thật. Không có API key/token trong project.

Đọc [implementation plan tiếng Việt](docs/IMPLEMENTATION_PLAN_VI.md) trước khi chạy.
Chiến lược baseline: ANN đa ngôn ngữ + cấu trúc pháp lý; summary dùng định tuyến,
trích dẫn dùng nguyên văn. GraphRAG đầy đủ/late chunking/fraud scoring là nhánh sau,
không giả đã triển khai.

## 1. Chuẩn bị trên Databricks

1. Import toàn bộ thư mục vào Workspace/Git folder, giữ `banking_rag/`, `notebooks/`,
   `static/`, requirements và config cùng cấu trúc. Các `.py` trong notebooks là
   Databricks source notebooks (`# Databricks notebook source`).
2. Tạo `config.local.json` bằng cách copy `config.example.json`, điền catalog/schema,
   SQL warehouse ID, embedding endpoint đa ngôn ngữ và chat endpoint hỗ trợ tiếng Việt.
   `config.local.json` **không chứa secret**, nhưng không commit cấu hình riêng.
3. Dùng UC-enabled compute: lựa chọn đơn giản Runtime 18.2+; serverless environment 3+
   nếu các AI functions có trong region. `ai_parse_document` cần Runtime 17.3+,
   `ai_prep_search` opt-in cần kiểm tra thêm requirements. Không dùng REST parser cho PDF dài.
4. Chọn model endpoints nội bộ Databricks đã được phê duyệt; kiểm tra embedding input
   length và multilingual retrieval bằng gold tiếng Việt. Không mặc định English-only bge.
5. Chạy `notebooks/00_setup`. Notebook tạo schema, volume và 6 Delta tables trong
   catalog đã chọn, không tạo catalog. Có CDF cho Delta Sync. Đây là thao tác có thể
   tạo tài nguyên/chi phí; chạy trong sandbox trước.

SQL warehouse phục vụ metadata và hydrate nguyên văn ở runtime Agent/App; Spark compute
của Job phục vụ parse + ingestion. Hai loại compute có vai trò riêng, cần quyền riêng.
Notebook đầu mỗi file cài requirements notebook-scoped và restart Python; đừng bỏ qua
các cell này khi chạy notebook độc lập.

## 2. Thử khi chưa có PDF

- Dùng schema thử nghiệm riêng, ví dụ `banking_rag_vi_sandbox` trong config.
- Chạy `01_seed_fixture`, chọn `confirm_synthetic=yes`.
- Fixture mang nhãn **GIẢ LẬP**, bypass OCR và đưa parsed JSON vào Bronze.
  Các bước structure/chunk/summary/embedding/index vẫn chạy thật và có chi phí.
- Chạy `03_review_publish`: xem version_id, node/chunk/summary, chọn ngày bắt đầu
  `2026-01-01`, `publish_after_review=yes`. Đây là ngày thử nghiệm, không phải ngày policy thật.
- Chạy `04_evaluate` với `evaluation/synthetic.json`. Notebook lưu MLflow run và traces.
  Gold IDs mẫu đang trống, vì vậy chưa tính evidence recall cho đến khi bạn gán nhãn.
- `04_search_smoke` hiển thị raw similarity results/scores và ngữ cảnh sau expansion,
  dùng kiểm tra retrieval và chụp screenshot Task 2.
- Chạy `05_deploy`; cell đầu log/register agent, cell cuối mặc định chưa deploy.
  Chọn `deploy_endpoint=yes` sau khi review tài nguyên/quyền. Đợi endpoint READY.
- Chạy `06_test_invocations`, lấy response thật và screenshot.

Không đưa fixture này chung schema production. Fixture không phải quy định ngân hàng,
không dùng để tư vấn khách hàng. Synthetic pass không chứng minh chất lượng OCR/tiếng Việt thực.

## 3. Job ingestion cho tài liệu thật

Tạo một Lakeflow Job với **một notebook task** trỏ tới `notebooks/02_ingest`:

- Compute hỗ trợ AI functions và Unity Catalog như trên.
- `max_concurrent_runs = 1`, bật queue để nhiều upload được xử lý lần lượt.
- Base parameter `config_path`: đường dẫn Workspace tuyệt đối tới config.local.json.
- Parameter `version_id` do App truyền qua `notebook_params`.
- Identity chạy Job có quyền Volume, Delta, tạo/cập nhật index và query model endpoints.
- Lấy Job ID vào `ingestion_job_id` hoặc App resource `ingestion-job`.

App upload PDF/DOCX vào UC Volume rồi đăng ký và gọi Job. Giới hạn App mặc định 50 MB,
PDF tối đa 500 trang, chủ động thấp hơn giới hạn 100 MB của SQL parser. Với 200–300 trang,
đọc binary + gọi `ai_parse_document` trong Spark/SQL, không dùng REST 100-page route.
DOCX được kiểm tra ZIP/content và giới hạn dung lượng giải nén; QA page rendering riêng.

Chạy trên một App instance/worker cho pilot. Upload được serialize trong process;
chưa có distributed ingest lock để scale nhiều replicas. Retry Job lỗi từ notebook
`02_ingest` với cùng version_id sau khi sửa nguyên nhân. Không retry bằng upload trùng:
idempotency sẽ trả trạng thái cũ. Nếu Job bị hủy/mất cluster trước exception handler,
registry có thể còn trạng thái đang xử lý: kiểm tra Job UI và retry thủ công.

Khi index xong trạng thái là `AWAITING_PUBLICATION`, **chưa được chatbot dùng**.
Chạy `03_review_publish` đối chiếu PDF/outline/chunks, điền khoảng hiệu lực và duyệt.
`effective_to` là ngày kết thúc loại trừ. Nếu thay thế bản cũ, chuyên viên phải chốt và
đóng khoảng hiệu lực bản cũ trong bảng publications trước khi publish bản mới.
Không tự đổi trạng thái READY bằng SQL để bỏ qua QA.

Tên file xác định document_id ở v1: giữ nguyên tên khi upload bản mới; cùng nội dung
và tên file không ingest lại. Nếu tên policy thay đổi, review document identity trước publish.
Không xóa tài liệu từ UI v1 để tránh mất bằng chứng.

## 4. Deploy giao diện với Databricks Apps

Tạo Custom App từ project root này. `app.yaml` chạy `python app.py`; `requirements.txt`
được App cài khi build. Không cần Node, Docker hay external host.

Thêm resources, tên khớp chính xác `valueFrom` trong app.yaml:

| Resource key | Tài nguyên | Quyền App cần |
|---|---|---|
| `sql-warehouse` | Warehouse trong config | CAN USE |
| `ingestion-job` | Job notebook 02 | CAN MANAGE RUN |
| `serving-endpoint` | Agent endpoint đã deploy | CAN QUERY |
| `document-volume` | UC Volume trong config | READ/WRITE VOLUME |

Volume không cần env valueFrom vì path lấy từ config, nhưng cần thêm resource/cấp quyền.
App service principal còn cần USE CATALOG, USE SCHEMA, SELECT/MODIFY trên
`banking_document_registry`. Không cấp App quyền sửa policy/chunks hay publish.
App chỉ hiển thị corpus chung: tất cả người có CAN USE app có thể hỏi corpus này.
Đây chưa phải mô hình bảo mật ACL theo từng tài liệu/người dùng; không đưa vào production
đa nhóm trước khi bổ sung OBO/ACL filtering và kiểm thử chống rò rỉ.

Job identity cần SELECT/MODIFY tables, READ/WRITE VOLUME, CREATE TABLE cho index,
quyền dùng/tạo AI Search endpoint và CAN QUERY embedding/chat endpoints phù hợp.
Người deploy agent cần quyền register UC model và các resources khai báo trong notebook 05.
Model Serving dùng automatic resource authentication theo tài liệu chính thức;
nếu workspace policy chặn, gửi log quyền để điều chỉnh, không hard-code PAT vào code.

Copy cấu hình không chứa secret `config.local.json` vào App source. Đảm bảo bỏ
`BANKING_DEMO` khỏi môi trường App thật. OAuth của App service principal do Databricks
cấp tự động; token không được gửi xuống browser. UI dùng same-origin APIs, textContent
cho nội dung tài liệu và CSP; chưa có antivirus/content-disarm hoặc distributed rate limit.

## 5. API contract

Agent dùng MLflow `ResponsesAgent`, không dùng payload `dataframe_split` của generic model:

```http
POST https://<workspace-host>/serving-endpoints/<endpoint-name>/invocations
Authorization: Bearer <Databricks OAuth token>
Content-Type: application/json

{
  "input": [{"role":"user","content":"Hồ sơ KYC cần những gì?"}],
  "custom_inputs": {"as_of":"2026-09-19"}
}
```

Response có `output` theo Responses API và `custom_outputs`: answer, status,
sources, retrieved_chunks, latency_ms, as_of, query_plan. Browser gọi backend App,
không trực tiếp giữ token. Notebook 06 dùng WorkspaceClient để test cùng API.

UI có chat, suggestions, input ngày hiệu lực, upload nhiều file/drag-drop, trạng thái
mỗi file và popup nguyên văn nguồn kèm path/trang/version. Lịch sử chat chỉ ở bộ nhớ
trang; agent v1 mỗi câu cần đủ ngữ cảnh, chưa lưu hội thoại hay rewrite follow-up.
Không stream token trước khi verify: trả response sau khi kiểm chứng hoàn tất.

## 6. A/B và vận hành

Các cờ trong config:

- `use_summaries=true`: bật routing Summary + Detail; false là baseline detail-only.
- `query_type=ANN`: baseline; `HYBRID` chỉ bật sau benchmark VI.
- `use_ai_prep_search=false`: opt-in contextual enrichment, cần reingest/index sandbox mới.
- `use_reranker=false`: opt-in managed reranker, cần benchmark và kiểm tra region.

Đổi embedding endpoint, index schema, parser/chunk rules: dùng **schema/index sandbox mới**,
không chỉnh index production đang phục vụ. Code không tự drop/recreate index.
Phiên bản READY không rebuild. Config được đóng gói trong MLflow model: thay retrieval
settings phải log/register/deploy model version mới, không chỉ sửa App config.

MLflow traces chứa câu hỏi và nội dung retrieval: coi là dữ liệu nội bộ nhạy cảm,
giới hạn quyền experiment/retention trước khi dùng tài liệu thật. Chưa có PII redaction
hay retention job. Model Serving scale_to_zero mặc định trong notebook có thể gây cold start.

## 7. Chạy kiểm thử local (không thay thế platform test)

```sh
python3.11 -m venv .venv
.venv/bin/pip install -r requirements-dev.txt
MLFLOW_DISABLE_AGENT_HINT=1 .venv/bin/python -m pytest -q
.venv/bin/ruff check banking_rag app.py tests
BANKING_DEMO=1 .venv/bin/python app.py
```

Mở `http://localhost:8000` chỉ để review UI. Demo **không** upload, gọi model, parse
hay giả lập đáp án nghiệp vụ. Môi trường runtime thật vẫn nằm trên Databricks.
Các dependency SDK chính đã pin; runtime image và transitive dependencies có thể khác
trên workspace. Chạy notebook 00 trước để phát hiện conflict.

## 8. Bộ deliverables và cách gửi log

| Đề bài | Artifact / màn hình cần lấy trên Databricks |
|---|---|
| Architecture | Sơ đồ trong implementation plan |
| Ingestion | `banking_documents` với 4 cột đề bài + metadata pháp lý |
| Vector Search | Hai index trong Catalog/AI Search; query results từ notebook/trace |
| Mosaic AI Agent | `banking_rag/agent.py`, UC registered model, serving deployment |
| MLflow | Notebook 04: run metrics + `evaluation_answers.json` + traces |
| API | Notebook 06: response `/invocations` |
| App | Databricks App URL, upload/status/chat/citations |

Khi lỗi, gửi: tên notebook/cell, full traceback đã bỏ secret/PII, Runtime/Python/package
versions, cloud/region, error_code, Job run ID, model/index name và cấu hình không chứa
secret. Nếu sai retrieval, gửi câu hỏi, as_of, expected source và returned chunk IDs.
Nếu OCR/structure sai, chỉ cần một vài trang đã ẩn thông tin nhạy cảm + parsed element
JSON liên quan; không cần gửi toàn bộ tài liệu ngân hàng.

## 9. Nguồn Databricks

[Parser](https://docs.databricks.com/aws/en/sql/language-manual/functions/ai_parse_document),
[Context preparation](https://docs.databricks.com/aws/en/sql/language-manual/functions/ai_prep_search),
[AI Search](https://docs.databricks.com/aws/en/ai-search/create-ai-search),
[Agent deployment](https://docs.databricks.com/aws/en/agents/custom-agents/model-serving/deploy-agent),
[Agent authentication](https://docs.databricks.com/aws/en/agents/custom-agents/model-serving/agent-authentication-model-serving),
[Apps runtime](https://docs.databricks.com/aws/en/dev-tools/databricks-apps/app-runtime).

Quyền App và `valueFrom` đối chiếu thêm tại
[Databricks Apps resources](https://docs.databricks.com/aws/en/dev-tools/databricks-apps/resources).

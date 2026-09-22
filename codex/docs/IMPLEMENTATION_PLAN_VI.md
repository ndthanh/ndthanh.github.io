# Implementation plan — Banking Knowledge Assistant tiếng Việt

Ngày rà soát: 19/09/2026. Quy mô mục tiêu: 4–5 văn bản, mỗi văn bản 200–300 trang,
tổng khoảng 800–1.500 trang. Đây là implementation v1 để thử trên Databricks,
chưa phải hệ thống đã nghiệm thu với tài liệu/nghiệp vụ thực.

## 1. Quyết định kiến trúc sau khi review

| Thành phần | Quyết định v1 | Lý do / điều kiện mở rộng |
|---|---|---|
| Detail index | Có, bắt buộc | Bằng chứng luôn là nguyên văn đã parse; không lấy câu tóm tắt làm policy |
| Summary index | Có, bật bằng cấu hình | Tóm tắt nhóm theo Điều/Mục để tìm hướng; sau đó tìm lại detail, không khóa cứng vào một nhánh |
| Contextual retrieval | Có path + tên văn bản; LLM enrichment tùy chọn | Prefix xác định không sinh thêm nghĩa; `ai_prep_search` chỉ dùng cho trường embedding |
| Parent/child retrieval | Có | Lưu cây pháp lý trong Delta; hydrate nguyên văn cha và đoạn liền kề sau retrieval |
| Hybrid search | Nhánh A/B, mặc định ANN | Không giả định Databricks có Vietnamese keyword analyzer; ANN đa ngôn ngữ + lookup điều khoản là baseline |
| Reranker | Tắt mặc định, có adapter | Cần đánh giá tiếng Việt, region và latency trước khi bật |
| GraphRAG đầy đủ | Hoãn | 4–5 tài liệu không tự động đòi graph; quan hệ ngoại lệ/áp dụng/thay thế phải có provenance và người duyệt |
| Late chunking | Hoãn | Cần embedding token-level toàn ngữ cảnh rồi pooling; không tương đương embedding managed mỗi chunk |

Các chiến lược trên là orchestration do ứng dụng triển khai, không phải một tính năng
“legal GraphRAG” được Databricks cung cấp sẵn. SDK hiện dùng tên AI Search;
vẫn đáp ứng phần Vector Search của đề bài.

## 2. Luồng triển khai trong Databricks

```text
Databricks Apps: chat + upload + trạng thái + trích dẫn
       │ upload                      │ hỏi
       ▼                             ▼
Unity Catalog Volume          Model Serving /invocations
       │                             │
Lakeflow Job                  Mosaic AI Agent Framework
       │                             │ MLflow ResponsesAgent
ai_parse_document v2                 ├─ xác định query / ngày tra cứu
       │                             ├─ lookup Điều/Khoản/Điểm bằng SQL
Bronze parsed JSON                   ├─ Detail index + Summary index
       │                             ├─ hydrate nguyên văn từ Delta
Cây pháp lý + chunks                 ├─ sinh claims + exact quote check
       │                             └─ kiểm chứng → trả lời / từ chối
       ├─ banking_documents                 │
       ├─ banking_policy_nodes              └─ MLflow traces + evaluation runs
       └─ banking_policy_summaries
                 │
          Delta Sync TRIGGERED
          Detail / Summary indexes
                 │
          Kiểm tra visibility → QA → công bố hiệu lực
```

Production runtime gồm Databricks Apps, Spark/SQL, UC, Jobs, AI Search, Model Serving,
MLflow trên Databricks. Không dùng Pinecone, Neo4j, backend cloud khác hoặc gọi LLM
ngoài Databricks. OpenAI-compatible client trong code trỏ vào Databricks Model Serving,
không dùng OpenAI API key. Chọn Databricks-hosted endpoints được ngân hàng phê duyệt;
không cấu hình external-provider endpoint nếu yêu cầu dữ liệu không rời nền tảng.

App dùng FastAPI + HTML/CSS/JS tĩnh: không cần Node runtime/build trên platform.
Layout tham chiếu [giao diện đã thống nhất](https://inspomcp.dev/screens/chat-openai-com),
sidebar đổi thành thư viện tài liệu. Không sao chép logo/nhận diện OpenAI.

## 3. Xử lý tiếng Việt và văn bản legal/policy

### 3.1 Ba lớp nội dung riêng biệt

1. **Nguồn:** file bất biến trong UC Volume, parsed JSON lưu Bronze; giữ bbox, page_id,
   element_id, confidence do parser trả về. Text là kết quả parser, không phải bản gốc
   hoàn hảo: vẫn cần so với PDF khi OCR sai.
2. **Bằng chứng:** `chunk_content` giữ text/HTML bảng từ parser, không bỏ dấu, không
   tự sửa tiền/ngày/ngoại lệ. Trích dẫn lấy từ trường này, không từ summary.
3. **Tìm kiếm:** NFC, thu gọn khoảng trắng, path prefix, alias không dấu riêng,
   mở rộng viết tắt ở query; contextual text có thể được sinh để embedding.

Không stemming, bỏ stopwords, dịch sang tiếng Anh hay word segmentation trước embedding
mặc định. Những thao tác đó có thể phá “không được”, “trừ trường hợp”, “và/hoặc”.
`search_folded` chỉ là trường hỗ trợ thí nghiệm; baseline ANN không tìm trên alias này.
Không tự phục hồi dấu bằng LLM vào nội dung chính thức.

### 3.2 NLU tối thiểu đã triển khai

- Giữ Unicode tiếng Việt; chuẩn hóa NFC ở truy vấn và bản text dành cho search.
- Bóc tham chiếu Điều/Khoản/Điểm; phân biệt **d** và **đ**.
- Mở rộng có kiểm soát KYC, AML, CCCD, CMND, NHNN, CDD, EDD, KH, KHCN, KHDN,
  luôn giữ query gốc. Đây là glossary tìm kiếm, không thay định nghĩa trong policy.
- Nhận tín hiệu phủ định, ngoại lệ, điều kiện, so sánh, câu hỏi tổng hợp; phát hiện
  ngày dd/mm/yyyy và mã văn bản để quan sát/debug. Mã văn bản chưa là metadata filter v1.
- Ngày hiệu lực lấy từ bộ chọn `as_of`; không tự đánh đồng ngày giao dịch trong câu hỏi
  với ngày áp dụng chính sách. Query có ngày tự do sẽ yêu cầu làm rõ.
- Câu follow-up thiếu chủ thể và câu yêu cầu liệt kê toàn bộ được yêu cầu thu hẹp;
  v1 chưa rewrite hội thoại nhiều lượt. Bộ phát hiện theo pattern là heuristic,
  chưa phải NLU classifier đã đo precision/recall.

### 3.3 Cấu trúc và “path” tới chunk

Ví dụ breadcrumb:

`KYC Policy / Chương II / Mục 1 / Điều 5 / Khoản 2 / Điểm đ`

Lưu đồng thời:

- `document_id`, `version_id`: identity văn bản và phiên bản; checksum chống ingest trùng.
- `node_id`, `parent_node_id`, `ancestor_ids`: cây cấu trúc để query, không parse ngược từ chuỗi path.
- `path_text`, `article`, `clause`, `point`: hiển thị và lookup.
- `chunk_pk`: khóa duy nhất; `chunk_id`: thứ tự cục bộ trong node.
- `start_page`, `end_page`, `element_ids`, `source_uri`: provenance.
- `previous_chunk_id`, `next_chunk_id`: đoạn kế cận cùng node.

Khóa được tạo xác định theo phiên bản/node/nội dung. Không bảo đảm node_id ổn định
giữa hai phiên bản có reflow/OCR khác: muốn so sánh sửa đổi cần bước alignment riêng.
Page hiển thị = page_id + 1, là trang vật lý của parser, không phải số trang in ở footer.
Với DOCX, phải đối chiếu bản render chuẩn trước khi gọi đó là số trang pháp lý.

Chunk không vượt qua node pháp lý. Mặc định khoảng 2.200 ký tự, không phải 2.200 tokens.
Đo bằng tokenizer thực của endpoint trước khi chốt; bản v1 có byte/context budgets,
chưa có tokenizer-specific packing. Bảng HTML được giữ nguyên; bảng quá lớn dừng
để review, chưa tự chia bảng nhiều trang. Footnote giữ lại nhưng chưa có liên kết
footnote-to-clause chuyên biệt. Mục lục có dotted leader bị loại.

Parser cấu trúc v1 hỗ trợ Phần/Chương/Mục/Điều/Phụ lục và dạng khoản `1.`, điểm `a)`.
Các kiểu “Phần thứ nhất”, tiểu mục đặc thù, heading không đánh số, mục lục không dotted
leader, hai cột, sơ đồ chứa nghĩa bắt buộc phải đưa vào bộ mẫu rồi mở rộng rule.
Không suy đoán rằng 100% bố cục 1.500 trang đã được giải quyết khi chưa có file thật.

### 3.4 Chất lượng cần bổ sung khi có PDF

Chọn 20–30 trang đại diện mỗi nhóm layout, không chỉ trang đầu. Đối chiếu thủ công:
dấu tiếng Việt; 0/O và 1/l; 450.000.000 vs 450,000; %, tỷ/triệu/đồng; ngày làm việc/ngày
lịch; và/hoặc; điều kiện/ngoại lệ nằm ở cuối trang, trang tiếp theo, bảng hoặc phụ lục.
Kiểm tra confidence/omitted content trong Bronze. Không dùng một threshold confidence
chung chưa hiệu chuẩn để tự duyệt. Parse có `error_status`, mất trang nguồn hoặc
không tìm thấy heading sẽ chặn xử lý; hình/sơ đồ không được dùng làm evidence text v1.

## 4. Retrieval và chống câu trả lời thiếu căn cứ

1. Lọc phiên bản **đã READY + hiệu lực tại as_of** trước mọi truy xuất.
2. Tham chiếu cụ thể chạy SQL tham số hóa; nếu không có Điều/Khoản/Điểm đó thì không
   thay bằng điều “gần giống”.
3. ANN detail cho query gốc và glossary expansion; summary search song song.
4. Mỗi summary chọn ra nhóm supporting chunks; tìm lại detail trong nhóm đó.
   Đồng thời giữ nhánh detail trực tiếp để tránh summary làm mất ngoại lệ.
5. RRF hợp nhất thứ hạng, không cộng raw cosine/keyword/rerank score khác thang.
6. Đọc nguyên văn từ Delta; bổ sung văn bản cha và chunk trước/sau trong cùng node.
   Đây là context expansion hữu hạn, chưa bảo đảm đã đọc hết mọi ngoại lệ/cross-reference.
7. LLM sinh claim + quote; kiểm tra source ID và quote tồn tại chính xác; gọi bước kiểm chứng
   hỗ trợ ngữ nghĩa. Không dùng text contextual/summary làm evidence.
8. Thiếu bằng chứng: trả đúng `I cannot find relevant information in the policy documents.`
   Mơ hồ: hỏi lại bằng tiếng Việt. Lỗi mạng/quyền/schema: trả lỗi hệ thống, không giả
   thành thiếu tài liệu.

Hai lần LLM + validation **giảm rủi ro**, không bảo đảm “zero hallucination”. Quote
đúng chưa đồng nghĩa diễn giải đúng, nên vẫn cần golden tests và người dùng kiểm chứng.
Conflict resolution, trả lời bao quát mọi quy định, legal precedence và thay thế văn bản
không được quyết định tự động trong v1. Chỉ một corpus chung cho nhóm pilot, chưa có
document ACL theo từng người dùng. Không cấp app cho nhóm ngoài phạm vi corpus.

## 5. Vòng đời tài liệu và chi phí

`QUEUED → PARSING → STRUCTURING → [CONTEXTUALIZING] → SUMMARIZING → INDEXING → AWAITING_PUBLICATION → READY`

Lỗi chuyển `FAILED` kèm bước và Job run ID; traceback ở Databricks Job. Bronze được
cache để retry không trả phí parse lại. Chỉ rebuild rows thuộc phiên bản chưa công bố;
không xóa bản READY. Source được content-addressed, upload trùng không gọi Job lại.

READY cần chờ index nhìn thấy đúng các khóa chunk/summary, rồi review thủ công và
khai báo `[effective_from, effective_to)`; không dùng thời điểm upload làm ngày hiệu lực.
Hai phiên bản cùng document_id không được có khoảng hiệu lực chồng nhau. V1 nhận diện
document theo tên file; đổi tên/thêm hậu tố version phải được người duyệt đối chiếu identity.

Chọn STANDARD + TRIGGERED để đồng bộ theo đợt. Không đoán số chunk/token hoặc chi phí
chính xác từ số trang: lấy pilot 20–30 trang, đo parse, embedding, summary và answer
usage rồi ngoại suy. Summary, ai_prep_search và verifier đều tăng token/call. LLM model
và embedding endpoint là cấu hình, không hard-code một model “chắc chắn có tiếng Việt”.

## 6. Các mốc implementation / acceptance

| Mốc | Artifact đã triển khai | Kiểm tra tiếp trên platform |
|---|---|---|
| P0 — Nền tảng | Config, requirements, `00_setup` | Cloud/region, UC, warehouse, permissions, endpoints, parser function |
| P1 — NLU + ingestion | `vietnamese.py`, `structure.py`, `pipeline.py`, fixture, Job notebook | Parse 1 PDF thật; QA outline/page/table; 1 tài liệu dài |
| P2 — Hai index | Delta Sync, CDF, sync visibility check, `retrieval.py` | Index READY, ANN results, phụ lục/ngoại lệ tiếng Việt |
| P3 — Agent | `ResponsesAgent`, citations, two-pass verification, no-answer | Chạy batch QA, lỗi quyền/timeout không bị che |
| P4 — MLflow | `04_evaluate`, traces, run table/metrics, optional LLM judges | Run thật + screenshots + gold-set do chuyên viên duyệt |
| P5 — API/UI | `05_deploy`, `06_test_invocations`, Databricks App | Endpoint invocations, upload từ App, job status, citation popup |
| P6 — Hiệu chỉnh | Feature flags và eval harness | A/B model/chunk/retrieval, p95 latency, cost, regression trước rollout |

Không đặt lịch ngày công chắc chắn trước khi biết quyền workspace và chất lượng scan.
Nhánh không có PDF: fixture parsed JSON giả lập chạy P1–P5, **không chứng minh OCR**.
Chế độ UI demo chỉ xem UI, không lưu file hay tạo câu trả lời ngân hàng giả.

## 7. Evaluation tiếng Việt

Tạo ít nhất 60–100 câu hỏi chuyên viên gán nhãn khi có tài liệu, gồm:

- Có dấu/không dấu/viết tắt; cùng intent khác cách nói.
- Điều/Khoản/Điểm, đặc biệt d và đ; tham chiếu không tồn tại.
- Phủ định, cấm/được/phải, tối thiểu/tối đa, ngoại lệ và điều kiện kèm theo.
- Thời hạn, đơn vị số tiền, bảng, nhiều trang, phụ lục.
- Hai văn bản trùng số Điều, nhiều phiên bản, as_of trong/ngoài hiệu lực.
- Không có đáp án, câu hỏi rộng, xung đột, prompt injection trong tài liệu.

Gold gồm question, as_of, expected status, required evidence chunk IDs, expected
claims/conditions và cờ critical. Code eval hiện tính status accuracy, evidence recall
nếu có gold IDs, latency mean/p95; lưu question/answer/latency/retrieved_chunks và sources.
`mlflow.genai.evaluate` có deterministic scorers; LLM judges tùy chọn, không thay SME.

Gate đề xuất để review, **chưa phải số đã đạt**: 100% source IDs/quotes hợp lệ;
không sai phủ định/ngưỡng/thời hạn trên bộ critical; no-answer precision ≥95%; evidence
recall ≥90% trên bộ gold đủ nhãn. Mục tiêu p95/cost phải chốt sau lần đo đầu.
Các metric chưa có nhãn cần được chuyên viên tính/duyệt, không giả là đã có tự động.

## 8. GraphRAG / late chunking / fraud — điều kiện mở rộng

Graph nhẹ có nền tảng là node/parent trong Delta. Chỉ thêm bảng edges khi có câu hỏi
multi-hop thật: `REFERS_TO`, `EXCEPTION_TO`, `AMENDS`, `REPLACES`, kèm source chunk,
effective dates, loại extracted/asserted và trạng thái reviewed. Traversal bounded qua
Spark/SQL, vẫn triển khai trong Databricks; không thêm graph database ngoài. Không để LLM
tự kết luận “thay thế/ưu tiên áp dụng” từ độ giống văn bản.

Late chunking chỉ spike riêng khi model embedding triển khai trên Databricks có API
token-level phù hợp. Cần tự tính vector và Delta Sync self-managed embeddings, kiểm tra
context limit và cost. Managed embedding mỗi chunk hiện tại không phải late chunking.

Fraud bonus chưa triển khai: chỉ với amount/country/age không đủ để phát sinh risk score
đáng tin. Cần policy/ngưỡng được duyệt, dữ liệu nhãn, scoring rule/model và human review;
không tự suy ra risk từ tuổi/quốc gia hoặc gọi output giả lập là kết luận gian lận.

## 9. Tài liệu chính thức đã đối chiếu

- [ai_parse_document: v2, input, limits, requirements](https://docs.databricks.com/aws/en/sql/language-manual/functions/ai_parse_document).
- [ai_prep_search: contextual preparation, Beta và schema](https://docs.databricks.com/aws/en/sql/language-manual/functions/ai_prep_search).
- [Tạo AI Search endpoint/index](https://docs.databricks.com/aws/en/ai-search/create-ai-search).
- [Truy vấn, filters và reranker](https://docs.databricks.com/aws/en/ai-search/query-ai-search).
- [Scan index API: khác schema similarity query](https://docs.databricks.com/api/vector-search/v1/scan-vector-index).
- [Agent deployment với Model Serving](https://docs.databricks.com/aws/en/agents/custom-agents/model-serving/deploy-agent).
- [Model Serving resource authentication](https://docs.databricks.com/aws/en/agents/custom-agents/model-serving/agent-authentication-model-serving).
- [MLflow scorers và judges](https://docs.databricks.com/aws/en/mlflow3/genai/eval-monitor/concepts/scorers).
- [Databricks Apps runtime](https://docs.databricks.com/aws/en/dev-tools/databricks-apps/app-runtime).

Link dùng AWS làm nhánh tham chiếu; nếu workspace Azure/GCP phải kiểm tra lại availability,
cloud-specific permissions và model terms. Code không giả định tài nguyên cloud đã tồn tại.

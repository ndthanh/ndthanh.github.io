const $ = (id) => document.getElementById(id);
const statuses = {QUEUED:'Chờ xử lý',PARSING:'Đang đọc tài liệu',STRUCTURING:'Đang tách điều khoản',CONTEXTUALIZING:'Đang bổ sung ngữ cảnh',SUMMARIZING:'Đang tạo mục lục',INDEXING:'Đang đồng bộ chỉ mục',AWAITING_PUBLICATION:'Chờ kiểm tra & duyệt hiệu lực',READY:'Đã duyệt',FAILED:'Cần kiểm tra log'};
let busy=false, uploadBusy=false, pollTimer=null, maxMB=50;
const now=new Date(); $('as-of').value=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');
function el(tag, cls, text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
async function api(path,options){const response=await fetch(path,options);const body=await response.json();if(!response.ok)throw new Error(typeof body.detail==='string'?body.detail:'Dữ liệu yêu cầu không hợp lệ.');return body;}
function banner(text){$('system-banner').textContent=text;$('system-banner').hidden=!text;}
async function loadDocs(){
  clearTimeout(pollTimer);
  let pending=false;
  try{const {documents}=await api('/api/documents');$('documents').replaceChildren();$('document-count').textContent=documents.length;
    $('ready-count').textContent=`${documents.filter(d=>d.status==='READY').length} phiên bản đã duyệt`;
    pending=documents.some(d=>!['READY','FAILED'].includes(d.status));
    if(!documents.length)$('documents').append(el('div','empty-docs','Tài liệu của bạn sẽ xuất hiện ở đây.\nChỉ tài liệu đã duyệt mới được dùng để trả lời.'));
    for(const d of documents){const item=el('div','document'),body=el('div','document-body');item.append(el('div','document-icon','▤'));const title=el('p','document-title',d.document_name);title.title=d.document_name;body.append(title,el('div',`status ${d.status==='READY'?'ready':d.status==='FAILED'?'failed':''}`,statuses[d.status]||d.status));body.append(el('div','document-detail',`${d.page_count||'—'} trang · ${d.chunk_count||0} đoạn`));if(d.status==='FAILED')body.append(el('div','document-detail',`Bước lỗi: ${d.error_code||'—'} · Run ${d.job_run_id||'—'}`));if(d.status==='AWAITING_PUBLICATION')body.append(el('div','document-detail',`Duyệt trong notebook 03 · ${d.version_id.slice(0,8)}`));item.append(body);$('documents').append(item);}
  }catch(e){banner(e.message);}
  if(pending)pollTimer=setTimeout(loadDocs,15000);
}
function openSource(source){$('source-title').textContent=source.document_name;$('source-path').textContent=source.path_text;$('source-meta').textContent=`Trang ${source.start_page}–${source.end_page} · Phiên bản ${source.version_id} · ${source.chunk_pk}`;$('source-content').textContent=source.source_content;$('source-dialog').showModal();}
function scrollBottom(){$('conversation').scrollTop=$('conversation').scrollHeight;}
async function ask(event){event?.preventDefault();const question=$('question').value.trim();if(!question||busy)return;if(!$('as-of').value){$('as-of').reportValidity();return;}
  busy=true;$('send').disabled=true;$('new-chat').disabled=true;$('welcome').hidden=true;$('messages').append(el('div','message user',question));$('question').value='';$('question').style.height='auto';const msg=el('div','message');msg.append(el('div','assistant-label','BCT ASSISTANT'));const text=el('div','','Đang tra cứu tài liệu và kiểm chứng trích dẫn…');msg.append(text);$('messages').append(msg);scrollBottom();
  try{const result=await api('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question,as_of:$('as-of').value})});text.textContent=result.answer;const sources=el('div','sources');for(const s of result.sources||[]){const button=el('button','source-chip',`[${s.id}] ${s.document_name} · tr. ${s.start_page}`);button.addEventListener('click',()=>openSource(s));sources.append(button);}msg.append(sources,el('div','answer-meta',`${result.status==='demo'?'Xem giao diện':`Tra cứu tại ${result.as_of}`} · ${((result.latency_ms||0)/1000).toFixed(1)} giây`));}
  catch(e){msg.classList.add('error');text.textContent=e.message;}
  finally{busy=false;$('send').disabled=false;$('new-chat').disabled=false;$('question').focus();scrollBottom();}
}
async function upload(files){if(uploadBusy)return;uploadBusy=true;$('dropzone').disabled=true;const messages=[];try{for(const file of files){$('upload-message').textContent=[...messages,`Đang tải ${file.name}…`].join('\n');if(file.size>maxMB*1024*1024){messages.push(`${file.name}: vượt ${maxMB} MB.`);continue;}const form=new FormData();form.append('file',file);try{const result=await api('/api/documents',{method:'POST',body:form});messages.push(`${file.name}: ${result.duplicate?'đã có trong thư viện':'đã tải lên, chờ xử lý'}.`);}catch(e){messages.push(`${file.name}: ${e.message}`);}}}finally{$('upload-message').textContent=messages.join('\n');uploadBusy=false;$('dropzone').disabled=false;$('file-input').value='';await loadDocs();}}
$('chat-form').addEventListener('submit',ask);$('question').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();ask();}});$('question').addEventListener('input',()=>{$('question').style.height='auto';$('question').style.height=Math.min($('question').scrollHeight,140)+'px';});
document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>{$('question').value=b.dataset.question;$('question').focus();}));
$('new-chat').addEventListener('click',()=>{$('messages').replaceChildren();$('welcome').hidden=false;$('question').value='';$('question').focus();});
$('dropzone').addEventListener('click',()=>$('file-input').click());$('file-input').addEventListener('change',()=>upload(Array.from($('file-input').files)));
['dragenter','dragover'].forEach(name=>$('dropzone').addEventListener(name,e=>{e.preventDefault();$('dropzone').classList.add('dragging');}));['dragleave','drop'].forEach(name=>$('dropzone').addEventListener(name,e=>{e.preventDefault();$('dropzone').classList.remove('dragging');}));$('dropzone').addEventListener('drop',e=>upload(Array.from(e.dataTransfer.files)));
$('open-sidebar').onclick=()=>$('sidebar').classList.add('open');$('close-sidebar').onclick=()=>$('sidebar').classList.remove('open');$('close-source').onclick=()=>$('source-dialog').close();
api('/api/info').then(info=>{maxMB=info.max_upload_mb;$('upload-limits').textContent=`PDF, DOCX · tối đa ${maxMB} MB / tệp`;if(info.demo){$('environment').textContent='Xem giao diện';banner('Chế độ xem giao diện · Chưa kết nối Databricks. Tải lên và câu trả lời AI chưa được kích hoạt.');}}).catch(e=>banner(e.message));loadDocs();

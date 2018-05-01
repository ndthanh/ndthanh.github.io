

const app = function () {
  const API_BASE = 'https://script.google.com/macros/s/AKfycbwzFYIniU3IOaIBW6e54UQmxe3pkBQOpXI8idwn_jipA-hU01k/exec';
  const API_KEY = 'abc';
  const RESULTS_PER_PAGE = 5;
  
  const state = {
    allLeadTable: {
      activePage: 1,
      previousPage: null,
      nextPage: null,
      transactionid: null
    },
    cache: {}
  };
  const page = {};

  function init () {

    page.sectionAllLeads = document.getElementById('section-all-leads');
    page.sectionLeadDetails = document.getElementById('section-lead-details');
    page.customerForm = document.getElementById('customer-form');

    page.sectionAllLeadNotice = document.getElementById('all-leads-notice');
    page.sectionLeadDetailsNotice = document.getElementById('lead-details-notice');
    page.allLeadTable = document.getElementById('all-leads-table');
    page.allLeadPrev = document.getElementById('prev-btn');
    page.allLeadNext = document.getElementById('next-btn');

    page.customerName = document.getElementById('customer-name');
    page.customerPhone = document.getElementById('customer-phone');
    page.customerEmail = document.getElementById('customer-email');

    page.orderDate = document.getElementById('order-date');
    page.lastActivityDate = document.getElementById('last-activity-timestamp');
    page.productName = document.getElementById('product-name');
    page.productPrice = document.getElementById('product-price');

    page.call1 = document.getElementById('call-1');
    page.status1 = document.getElementById('status-1');

    page.call2 = document.getElementById('call-2');
    page.status2 = document.getElementById('status-2');

    page.call3 = document.getElementById('call-3');
    page.status3 = document.getElementById('status-3');

    page.note1 = document.getElementById('note-1');
    page.callResult = document.getElementById('call-result');

    page.actionCallBtn = document.getElementById('call-from-customer-form');
    page.actionEmailBtn = document.getElementById('send-email-customer-form');
    page.actionConfirm = document.getElementsByClassName('confirm-update-lead');
    
    _writeCache();
    _initEventListener();
  }

  function _writeCache () {
    page.allLeadTable.innerHTML = '';
    page.sectionAllLeadNotice.innerHTML = 'Loading customer data ...';
    fetch( _buildApiUrl(state.allLeadTable.activePage, 'cache','') ).then(function (response) {
        return response.json();
    }).then(function (json) {
        // console.log(JSON.stringify(json));
        state.cache = json;
        _renderTable();
        page.sectionAllLeadNotice.innerHTML = '';
    });
  }

  function _renderTable () {
    var data = _getAllLeads();
    page.allLeadTable.innerHTML = data.html;
    _renderAllLeadsTablePagination(data.pagi);
  }

  function _getAllLeads () {

    var data = state.cache;

    var dataSorted = data.data.sort(function (a, b) {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });

    data.data = dataSorted;
  
    var page = state.allLeadTable.activePage;
    var paginated = paginate(dataSorted, page);

    return {
      html: _renderLeadTable(paginated.posts),
      pagi: paginated
    };
  }

  function _renderAllLeadsTablePagination(data) {
    let next = data.pages.next;
    let prev = data.pages.previous;

    page.allLeadNext.style.display = (next === null ? 'none' : 'inline-block');
    page.allLeadPrev.style.display = (prev === null ? 'none' : 'inline-block');
  }

  function _nextAllLeadsTablePage () {
    _incrementActivePage();
    _renderTable ()
  }

  function _prevAllLeadsTablePage () {
    _decrementActivePage();
    _renderTable ()
  }

  function _initEventListener() {
    page.allLeadPrev.onclick = function (e) { _prevAllLeadsTablePage();};
    page.allLeadNext.onclick = function (e) { _nextAllLeadsTablePage();};
    page.actionConfirm[0].onclick = function (e) { _updateLeadDetail();};
    page.actionConfirm[1].onclick = function (e) { _updateLeadDetail();};

    document.querySelector('body').addEventListener('click', function(event) {
      if (event.target.className.toLowerCase() === 'lead-detail-id') {
        state.allLeadTable.transactionid = event.target.dataset.transactionid;

        page.sectionLeadDetailsNotice.innerHTML = 'Loading customer data ...';
        page.customerForm.style.display = 'none';

        _viewLeadDetail(state.allLeadTable.transactionid);

        page.sectionLeadDetails.scrollIntoView(true);
      }
    });
  }


  function _renderLeadTable (rows) {
    let tableHtml = `
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Mã giao dịch</th>
              <th>Họ Tên</th>
              <th>Số điện thoại</th>
              <th>Mã sản phẩm</th>
              <th>Đơn giá</th>
            </tr>
          </thead>
          <tbody>`;
    rows.forEach(function (row) {
      tableHtml += `
            <tr>
              <td>${row.id}</td>
              <td class='lead-detail-id' data-transactionid='${row.id}'>${row.name}</td>
              <td><a class='lead-detail-phone' href='tel:${row.phone}'>${row.phone}</a></td>
              <td>${row.product_id}</td>
              <td>${row.price}</td>
            </tr>`;
    });
    tableHtml += `</tbody></table>`;
    return tableHtml;
  }

  function _buildApiUrl(page, action, id) {
    let url = API_BASE;
    url += '?key=' + API_KEY;
    url += '&action=' + action;
    url += '&page=' + page;
    url += '&id=' + id;

    return url;
  }

  function _formatDate (string) {
    return new Date(string).toLocaleDateString('en-GB');
  }

  function _formatContent (string) {
    return string.split('\n')
      .filter((str) => str !== '')
      .map((str) => `<p>${str}</p>`)
      .join('');
  }

  function _capitalize (label) {
    return label.slice(0, 1).toUpperCase() + label.slice(1).toLowerCase();
  }

  function _resetActivePage () {
    state.allLeadTable.activePage = 1;
  }

  function _incrementActivePage () {
    state.allLeadTable.activePage += 1;
  }

  function _decrementActivePage () {
    state.allLeadTable.activePage -= 1;
  }

  function _viewLeadDetail(id) {
    var result = state.cache.data.filter((d) => d.id.toLowerCase() === id.toLowerCase());
    _fillCustomForm(result[0]);
  }
//var headings = ["timestamp","name","phone","email","product","id","product_id","price","call_1","status_1","call_2","status_2","call_3","status_3","result","last_time","note"];
  function _fillCustomForm(data) {
    page.customerName.value = data.name;
    page.customerPhone.value = data.phone;
    page.customerEmail.value = data.email;

    page.orderDate.value = data.timestamp;
    page.lastActivityDate.value = data.last_time;
    page.productName.value = data.product;
    page.productPrice.value = data.price;

    page.call1.value = data.call_1;
    page.status1.value = data.status_1;

    page.call2.value = data.call_2;
    page.status2.value = data.status_2;

    page.call3.value = data.call_3;
    page.status3.value = data.status_3;

    page.callResult.value = data.result;
    page.note1.value = data.note;

    page.actionCallBtn.href = 'tel:' + data.phone;
    page.actionEmailBtn.href = 'mailto:' + data.email;

    page.sectionLeadDetailsNotice.innerHTML = '';
    page.customerForm.style.display = 'block';
  }

  function _updateLeadDetail() {

    if ( state.allLeadTable.transactionid === null ) {
      alert('Hãy thao tác bắt đầu từ danh sách khách hàng!');
      return;
    }

    const id = state.allLeadTable.transactionid;
    let url = _buildApiUrl('', 'update', id);
    url += '&call_1=' + page.call1.value;
    url += '&status_1=' + page.status1.value;
    url += '&call_2=' + page.call2.value;
    url += '&status_2=' + page.status2.value;
    url += '&call_3=' + page.call3.value;
    url += '&status_3=' + page.status3.value;
    url += '&result=' + page.callResult.value;
    url += '&note=' + page.note1.value;

    // console.log(encodeURIComponent(url));
    fetch( url ).then(function (response) {
        return response.json();
    }).then(function (json) {
        alert('Cập nhật thông tin thành công!');
        page.sectionAllLeads.scrollIntoView(true);
        page.sectionLeadDetailsNotice.innerHTML = 'Xin mời bắt đầu thao tác từ <a href="#section-all-leads">danh sách khách hàng</a>';
        page.customerForm.style.display = 'none';
    });
  }

  function paginate(posts, page) {
    var postsCopy = posts.slice();
    var postsChunked = [];
    var postsPaginated = {
      posts: [],
      count: posts.length,
      perPage: RESULTS_PER_PAGE,
      activePage: page,
      pages: {
        previous: null,
        next: null
      }
    };
    
    while (postsCopy.length > 0) {
      postsChunked.push(postsCopy.splice(0, RESULTS_PER_PAGE));
    }
    
    if (page - 1 in postsChunked) {
      postsPaginated.posts = postsChunked[page - 1];
    } else {
      postsPaginated.posts = [];
    }

    if (page > 1 && page <= postsChunked.length) {
      postsPaginated.pages.previous = page - 1;
    }
    
    if (page >= 1 && page < postsChunked.length) {
      postsPaginated.pages.next = page + 1;
    }
    
    return postsPaginated;
  }

  function buildSuccessResponse(data) {
    return {
      status: 'success',
      data: data
    };
  }

  return {
    init: init
  };
}();


const app = function () {
  const API_BASE = 'https://script.google.com/macros/s/AKfycbwzFYIniU3IOaIBW6e54UQmxe3pkBQOpXI8idwn_jipA-hU01k/exec';
  const API_KEY = 'abc';
  
  const state = {
    allLeadTable: {
      activePage: 1,
      previousPage: null,
      nextPage: null
    }
  };
  const page = {};

  function init () {
    page.sectionAllLeadNotice = document.getElementById('all-leads-notice');
    page.allLeadTable = document.getElementById('all-leads-table');
    page.allLeadPrev = document.getElementById('prev-btn');
    page.allLeadNext = document.getElementById('next-btn');

    _getAllLeads();
    _initEventListener();
  }

  function _getAllLeads () {
    page.allLeadTable.innerHTML = '';
    page.sectionAllLeadNotice.innerHTML = 'Loading customer data ...';
    
    fetch( _buildApiUrl(state.allLeadTable.activePage, 'all') ).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        page.allLeadTable.innerHTML = _renderLeadTable(json.data.posts);
        _renderAllLeadsTablePagination(json);
        page.sectionAllLeadNotice.innerHTML = '';
    });
  }

  function _renderAllLeadsTablePagination(data) {
    let next = data.data.pages.next;
    let prev = data.data.pages.previous;

    page.allLeadNext.style.display = (next === null ? 'none' : 'inline-block');
    page.allLeadPrev.style.display = (prev === null ? 'none' : 'inline-block');
  }

  function _nextAllLeadsTablePage () {
    _incrementActivePage();
    _getAllLeads();
  }

  function _prevAllLeadsTablePage () {
    _decrementActivePage();
    _getAllLeads();
  }

  function _initEventListener() {
    page.allLeadPrev.onclick = function (e) { _prevAllLeadsTablePage();};
    page.allLeadNext.onclick = function (e) { _nextAllLeadsTablePage();};
  }

//var headings = ["timestamp","name","phone","email","product","id","product_id","price","call_1","status_1","call_2","status_2","call_3","status_3","result","last_time","note"];
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
              <td>${row.name}</td>
              <td>${row.phone}</td>
              <td>${row.product_id}</td>
              <td>${row.price}</td>
            </tr>`;
    });
    tableHtml += `</tbody></table>`;
    return tableHtml;
  }

  function _buildApiUrl(page, action) {
    let url = API_BASE;
    url += '?key=' + API_KEY;
    url += '&action=' + action;
    url += '&page=' + page;

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

  function _setActiveCategory (category) {
    state.activeCategory = category;
    
    const label = category === null ? 'no filter' : category;
    Array.from(page.filter.children).forEach(function (element) {
        element.classList = label === element.innerHTML.toLowerCase() ? 'selected' : '';
      });
  }

  return {
    init: init
  };
}();
import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'APIInteractions',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'API Interactions'
    const log = ref('Log sẽ hiện ra ở đây')
    const sheetName = ref('Sheet1')
    const rangeAddress = ref('A1:D4')
    const apiUrl = ref('https://script.google.com/macros/s/AKfycbyp6GPUxA4tYRFir15XGV2no2uyZzwiRW1QJ0BsBRyVu9raf4gdU0iFCO7nXVcBclHaZA/exec')
    const isSendingData = ref(false)

    const sendData = () => {
      window.Excel.run(async (context) => {

        isSendingData.value = true

        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let range = sheet.getRange(targetRangeAddress.value)
        range.load('values')
        await context.sync()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/javascript");

        var raw = JSON.stringify(range.values)

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        }

        fetch(apiUrl.value, requestOptions)
          .then(response => {
            isSendingData.value = false
            log.value = response.text()
          })
          .then(result => console.log(result))
          .catch(error => {
            isSendingData.value = false
            console.log('error', error)
            log.value = 'Error ' + JSON.stringify(error)
          })
      })
    }

    const sendDataTest = () => {
      isSendingData.value = true
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain;charset=utf-8")

      var raw = "[\n    [ \"Product\", \"Qty\", \"Unit Price\", \"Total Price\" ],\n    [ \"Almonds\", 2, 7.5, \"=RC[-2]*RC[-1]\" ],\n    [ \"Coffee\", 1, 34.5, \"=RC[-2]*RC[-1]\" ],\n    [ \"Chocolate\", 5, 9.56, \"=RC[-2]*RC[-1]\" ],\n    [ \"\", \"\", \"\", \"=SUM(R[-3]C:R[-1]C)\" ]\n]";

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://script.google.com/macros/s/AKfycbyp6GPUxA4tYRFir15XGV2no2uyZzwiRW1QJ0BsBRyVu9raf4gdU0iFCO7nXVcBclHaZA/exec", requestOptions)
        .then(response => response.text())
        .then(result => {
          isSendingData.value = false
          console.log(result)
          log.value = JSON.stringify(result)
        })
        .catch(error => {
          isSendingData.value = false
          console.log('error', error)
        });
    }

    const getData = () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      isSendingData.value = true

      fetch(apiUrl.value, requestOptions)
        .then(response => response.text())
        .then(result => {

          const data = JSON.parse(result).data

          console.log(data)

          window.Excel.run(async (context) => {
            let activeCell = context.workbook.getActiveCell()
            let range = activeCell.getResizedRange(data.length - 1, data[0].length - 1)
            range.values = data

            isSendingData.value = false
          })

        })
        .catch(error => {
          isSendingData.value = false
          console.log('error', error)
        })
    }

    return {
      title, counterStore, log,
      sheetName, rangeAddress, apiUrl, sendData, isSendingData, sendDataTest, getData
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el :label="title" />
        </q-breadcrumbs>

        <h6 class="text-bold">API Interactions</h6>
        <p caption>Một số ví dụ làm việc với API</p>
        
        <q-separator />
        <pre>{{ log }}</pre>
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">

          <p class="text-subtitle1 text-bold">Truyền dữ liệu từ Excel tới API Endpoints</p>
          <p caption>Để chuẩn bị cho ví dụ này, bạn cần có một API Endpoint. Chúng ta sẽ sử dụng cách đơn giản nhất: sử dụng Google Sheets và Apps Script để tạo ra Endpoint này. Thêm đoạn code sau đây vào Apps Script và deploy dự án để lấy được URL của Webapp</p>

          <pre>
          // https://docs.google.com/spreadsheets/d/1D38-pRjjWsgmjjh-DagCT_-oBBxGzUAU_XaST5U3lSA/edit#gid=0
          function doPost(e) {
            SpreadsheetApp.getActive().getSheets()[0].appendRow([e.postData.contents])
            return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
          }
          </pre>



          <q-input
            v-model="sheetName"
            label="Sheetname"
            outlined
          />

          <q-input
            v-model="rangeAddress"
            label="Target Range Address"
            outlined
          />

          <q-input
            v-model="apiUrl"
            label="Target API Endpoint URL"
            outlined
          />

          <q-btn
            push
            label="Send Data"
            @click="sendDataTest"
            :loading="isSendingData"
          />

          <br />
          <q-separator />

          <p class="text-subtitle1 text-bold">Lấy dữ liệu từ API về Excel</p>
          <p caption>Để chuẩn bị cho ví dụ này, bạn cần chuẩn bị 1 Endpoint cung cấp dữ liệu sau đây sử dụng Apps Script. Lưu ý, dữ liệu trên Google Sheets cần được tạo ở sheet đầu tiên. Dữ liệu lấy về Excel sẽ được ghi và mở rộng tại ô đang được chọn.</p>

          <pre>
          function doGet(e) {
            const data = SpreadsheetApp.getActive().getSheets()[0].getDataRange().getValues()
            return ContentService.createTextOutput(JSON.stringify({ data })).setMimeType(ContentService.MimeType.JSON)
          }
          </pre>

          <q-btn
            push
            label="Get Data from remote"
            @click="getData"
            :loading="isSendingData"
          />
          
        </div>
      </q-page>
  `,
}
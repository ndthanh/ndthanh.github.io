import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Range',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'Range'
    const log = ref('Log sẽ hiện ra ở đây')
    const text = ref('[\n    ["Potato Chips", 10, 1.80]\n]')
    const rangeValue = ref('')
    const sheetName = ref('Sheet1')
    const targetRangeAddress = ref('A1')
    const hex = ref('#686868')
    const hexa = ref('#FF00FFCC')
    const rgb = ref('rgb(0,0,0)')
    const rgba = ref('rgba(255,0,255,0.8)')

    const ndt_SetValues = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let data = JSON.parse(text.value)

        let range = sheet.getRange(targetRangeAddress.value).getResizedRange(data.length - 1, data[0].length - 1)
        range.values = data
        range.format.autofitColumns()

        await context.sync()
      });
    }

    const ndt_ReadRangeAddress = () => {

      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Sheet1")

        let range = sheet.getRange("B2:C5")
        range.load("address")
        await context.sync()

        log.value = `The address of the range B2:C5 is "${range.address}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      })

    }

    const ndt_ReadNamedRangeAddress = () => {

      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Sheet1")

        let range = sheet.getRange("MyRange")
        range.load("address")
        await context.sync()

        log.value = `The address of the range "MyRange" is "${range.address}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      })

    }

    const ndt_GetValues = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let range = sheet.getRange(targetRangeAddress.value)
        range.load("values")
        await context.sync()

        rangeValue.value = JSON.stringify(range.values, null, 4)

      })
    }

    const ndt_GetRangeText = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let range = sheet.getRange(targetRangeAddress.value)
        range.load("text")
        await context.sync()

        rangeValue.value = JSON.stringify(range.text, null, 4)

      })
    }

    const ndt_GetRangeFormulas = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let range = sheet.getRange(targetRangeAddress.value)
        range.load("formulas")
        await context.sync()

        rangeValue.value = JSON.stringify(range.formulas, null, 4)

      })
    }

    const ndt_SetFillColor = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let range = sheet.getRange(targetRangeAddress.value)
        range.format.fill.color = hex.value

        await context.sync()
      })
    }


    return {
      title, counterStore, log, text, sheetName, targetRangeAddress, rangeValue,
      hex, hexa, rgb, rgba,
      ndt_SetValues, ndt_ReadRangeAddress, ndt_ReadNamedRangeAddress,
      ndt_GetRangeText, ndt_GetRangeFormulas, ndt_GetValues,
      ndt_SetFillColor
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el :label="title" />
        </q-breadcrumbs>

        <h6 class="text-bold">Ranges</h6>
        <p caption>Một số phương thức ví dụ để làm việc với Ranges</p>
        
        <q-separator />
        <pre>{{ log }}</pre>
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">

          <p class="text-subtitle1">Ghi dữ liệu ra sheets</p>
          <p caption>Ghi các kiểu dữ liệu, công thức vào Range</p>
          <p caption>Dùng dữ liệu test sau đây để có thể thử</p>
          
          <br />
          
          <p caption>Ghi dữ liệu vào 1 ô duy nhất</p>
          <pre>
          [[234]]
          </pre>
          
          <p caption>Ghi dữ liệu vào 1 vùng</p>
          <pre>
          [
              ["Potato Chips", 10, 1.80]
          ]
          </pre>

          <p caption>Ghi dữ liệu và công thức vào 1 vùng. Chú ý công thức trong ví dụ này sử dụng tham chiếu R1C1</p>
          <pre>
          [
              [ "Product", "Qty", "Unit Price", "Total Price" ],
              [ "Almonds", 2, 7.5, "=RC[-2]*RC[-1]" ],
              [ "Coffee", 1, 34.5, "=RC[-2]*RC[-1]" ],
              [ "Chocolate", 5, 9.56, "=RC[-2]*RC[-1]" ],
              [ "", "", "", "=SUM(R[-3]C:R[-1]C)" ]
          ]
          </pre>

          <q-input
            v-model="text"
            filled
            type="textarea"
          />

          <q-input
            v-model="sheetName"
            label="Sheetname"
            outlined
          />

          <q-input
            v-model="targetRangeAddress"
            label="Target Range Address"
            outlined
          />

          <q-btn
            push
            label="Set values"
            @click="ndt_SetValues"
          />

          <br />
          <q-separator />
          <p class="text-subtitle1">Đọc địa chỉ của Range B2:C5 của "Sheet1"</p>
          
          <q-btn
            push
            label="Đọc địa chỉ của vùng B2:C5"
            @click="ndt_ReadRangeAddress"
          />

          <br />
          <q-separator />
          <p class="text-subtitle1">Đọc địa chỉ của Range được đặt tên (Named Range)</p>
          <p caption>Để chạy ví dụ này, hãy tạo 1 Named Range là "MyRange" ở trong "Sheet1"</p>
          
          <q-btn
            push
            label="Đọc địa chỉ"
            @click="ndt_ReadNamedRangeAddress"
          />

          <br />
          <q-separator />
          <p class="text-subtitle1">Đọc giá trị, công thức từ 1 Range</p>

          <q-input
            v-model="sheetName"
            label="Sheetname"
            outlined
          />

          <q-input
            v-model="targetRangeAddress"
            label="Target Range Address"
            outlined
          />

          <q-btn
            push
            label="Get Range Values"
            @click="ndt_GetValues"
          />
          
          <q-btn
            push
            label="Get Text from Range"
            @click="ndt_GetRangeText"
          />

          <q-btn
            push
            label="Get Formulas from Range"
            @click="ndt_GetRangeFormulas"
          />

          <br />
          <p>Kết quả:</p>

          <q-input
            v-model="rangeValue"
            filled
            type="textarea"
          />

          <br />
          <q-separator />
          <p class="text-subtitle1">Định dạng Range</p>

          <q-input
            v-model="sheetName"
            label="Sheetname"
            outlined
          />

          <q-input
            v-model="targetRangeAddress"
            label="Target Range Address"
            outlined
          />

          <q-color v-model="hex" class="my-picker" />

          <q-btn
            push
            label="Tô màu cho vùng"
            @click="ndt_SetFillColor"
          />

        </div>
      </q-page>
  `,
}
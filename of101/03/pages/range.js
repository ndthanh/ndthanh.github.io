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
    const sheetName = ref('Sheet1')
    const targetRangeAddress = ref('A1')

    const ndt_SetValues = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem(sheetName.value)

        let data = JSON.parse(text.value)
        console.log('sheetname: ', sheetName.value)
        console.log('target: ', targetRangeAddress.value)
        console.log(data)

        let range = sheet.getRange(targetRangeAddress.value).getResizedRange(data.length, data[0].length)
        range.values = data
        range.format.autofitColumns()

        await context.sync()
      });
    }


    return {
      title, counterStore, log, text, sheetName, targetRangeAddress,
      ndt_SetValues
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

        </div>
      </q-page>
  `,
}
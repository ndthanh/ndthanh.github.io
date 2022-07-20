import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Worksheet',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'Worksheet'
    const log = ref('Dữ liệu sẽ hiện ra ở đây')

    const ndt_GetSheetInfo = () => {

      window.Excel.run(async (context) => {
        let sheets = context.workbook.worksheets
        sheets.load("items/name")

        await context.sync()

        if (sheets.items.length > 1) {
          log.value = `Có ${sheets.items.length} worksheets trong workbook này.`
        } else {
          log.value = `Có 1 Worksheet trong workbook này.`
        }

        log.value += `Tên các sheets:`
        log.value += sheets.items.map(sheet => sheet.name).join(', ')

        Quasar.Notify.create('Success')
      })

    }

    const ndt_GetActiveSheet = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getActiveWorksheet()
        sheet.load("name")

        await context.sync()
        log.value = `The active worksheet is "${sheet.name}"`
      });
    }

    const ndt_SetActiveSheet = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Sample")
        sheet.activate()
        sheet.load("name")

        await context.sync()
        log.value = `The active worksheet is "${sheet.name}"`
        Quasar.Notify.create(`Active sheet is: "${sheet.name}"`)
      });
    }

    return {
      title, counterStore, log,
      ndt_GetSheetInfo, ndt_GetActiveSheet, ndt_SetActiveSheet
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el :label="title" />
        </q-breadcrumbs>

        <h6 class="text-bold">Worksheets</h6>
        <p caption>Một số phương thức ví dụ để làm việc với Worksheets</p>

        <q-separator />
        <pre>{{ log }}</pre>
        <q-separator />
        
        <br />

        <div class="q-gutter-md">

          <p caption>Đọc thông tin cơ bản từ sheets, liệt kê tên sheets, số lượng sheets</p>
          <q-btn
            push
            label="Get Sheet Info"
            @click="ndt_GetSheetInfo"
          />
          <q-separator />

          <p caption>Active sheets</p>
          <q-btn
            push
            label="Get Active Sheet"
            @click="ndt_GetActiveSheet"
          />
          <q-btn
            push
            label="Set Active Sheet"
            @click="ndt_SetActiveSheet"
          />
          <q-separator />

        </div>
      </q-page>
  `,
}
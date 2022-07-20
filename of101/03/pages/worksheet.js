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

        Quasar.Notify.create({ message: log.value, position: 'top' })
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
        let sheet = context.workbook.worksheets.getItem("Sheet1")
        sheet.activate()
        sheet.load("name")

        await context.sync()
        log.value = `The active worksheet is "${sheet.name}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      });
    }

    const ndt_GetFirstSheet = () => {

      window.Excel.run(async (context) => {
        let firstSheet = context.workbook.worksheets.getFirst()
        firstSheet.load("name")

        await context.sync()
        log.value = `The name of the first worksheet is "${firstSheet.name}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      });

    }

    const ndt_GetLastSheet = () => {

      window.Excel.run(async (context) => {
        let lastSheet = context.workbook.worksheets.getLast()
        lastSheet.load("name")

        await context.sync()
        log.value = `The name of the last worksheet is "${lastSheet.name}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      });

    }

    const ndt_GetNextSheet = () => {

      window.Excel.run(async (context) => {
        let currentSheet = context.workbook.worksheets.getActiveWorksheet()
        let nextSheet = currentSheet.getNext()
        nextSheet.load("name")

        await context.sync()
        log.value = `The name of the sheet that follows the active worksheet is "${nextSheet.name}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      });

    }

    const ndt_GetPreviousSheet = () => {

      window.Excel.run(async (context) => {
        let currentSheet = context.workbook.worksheets.getActiveWorksheet()
        let nextSheet = currentSheet.getPrevious()
        nextSheet.load("name")

        await context.sync()
        log.value = `The name of the sheet that precedes the active worksheet is "${nextSheet.name}"`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      });

    }

    const ndt_AddSheet = () => {

      window.Excel.run(async (context) => {
        let sheets = context.workbook.worksheets

        let sheet = sheets.add("Sample")
        sheet.load("name, position")

        await context.sync()
        log.value = `Added worksheet named "${sheet.name}" in position ${sheet.position}`
        Quasar.Notify.create({ message: log.value, position: 'top' })
      });

    }

    const ndt_CopySheet = () => {
      window.Excel.run(async (context) => {
        let myWorkbook = context.workbook;
        let sampleSheet = myWorkbook.worksheets.getActiveWorksheet();
        let copiedSheet = sampleSheet.copy(Excel.WorksheetPositionType.after, sampleSheet);
        await context.sync();
      });
    }

    const ndt_DeleteLastSheet = () => {

      window.Excel.run(async (context) => {
        let sheets = context.workbook.worksheets;
        sheets.load("items/name")

        await context.sync()
        if (sheets.items.length === 1) {
          log.value = "Unable to delete the only worksheet in the workbook"
          Quasar.Notify.create({ message: log.value, position: 'top' })
        } else {
          let lastSheet = sheets.items[sheets.items.length - 1];

          log.value = `Deleting worksheet named "${lastSheet.name}"`
          Quasar.Notify.create({ message: log.value, position: 'top' })
          lastSheet.delete()

          await context.sync()
        }
      })

    }

    const ndt_RenameSheet = () => {
      window.Excel.run(async (context) => {
        let currentSheet = context.workbook.worksheets.getActiveWorksheet();
        currentSheet.name = "New Name";

        await context.sync();
      });
    }

    const ndt_add_event = () => {
      window.Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Sheet1")
        sheet.onChanged.add(onWorksheetChanged)
        await context.sync()

        log.value = "Added a worksheet-level data-changed event handler."
        Quasar.Notify.create({ message: log.value, position: 'top' })
      })
    }
    // more events:
    // https://docs.microsoft.com/en-us/javascript/api/excel/excel.worksheetaddedeventargs?view=excel-js-preview
    function onWorksheetChanged(eventArgs) {
      Quasar.Notify.create({ message: 'changed!', position: 'top' })
      window.Excel.run(function (context) {
        let details = eventArgs.details;
        let address = eventArgs.address;

        // Print the before and after types and values to the console.
        log.value = `Change at ${address}: was ${details.valueBefore}(${details.valueTypeBefore}),`
          + ` now is ${details.valueAfter}(${details.valueTypeAfter})`
        return context.sync();
      });
    }

    return {
      title, counterStore, log,
      ndt_GetSheetInfo, ndt_GetActiveSheet, ndt_SetActiveSheet,
      ndt_GetFirstSheet, ndt_GetLastSheet,
      ndt_GetNextSheet, ndt_GetPreviousSheet,
      ndt_AddSheet, ndt_CopySheet, ndt_DeleteLastSheet,
      ndt_RenameSheet, ndt_add_event
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

        <div class="q-gutter-sm">

          <p class="text-subtitle1">Đọc thông tin cơ bản từ sheets, liệt kê tên sheets, số lượng sheets</p>
          <q-btn
            push
            label="Get Sheet Info"
            @click="ndt_GetSheetInfo"
          />
          <q-separator />

          <p class="text-subtitle1">Active sheets</p>
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

          <p class="text-subtitle1">Tham chiếu tới sheets bằng vị trí tương đối</p>
          
          <q-btn
            push
            label="Get First Sheet"
            @click="ndt_GetFirstSheet"
          />

          <q-btn
            push
            label="Get Last Sheet"
            @click="ndt_GetLastSheet"
          />

          <q-btn
            push
            label="Get Next Sheet"
            @click="ndt_GetNextSheet"
          />

          <q-btn
            push
            label="Get Previous Sheet"
            @click="ndt_GetPreviousSheet"
          />
          
          <q-btn
            push
            label="Add Sheet"
            @click="ndt_AddSheet"
          />

          <q-btn
            push
            label="Copy Active Sheet"
            @click="ndt_CopySheet"
          />

          <q-btn
            push
            label="Delete Last Sheet"
            @click="ndt_DeleteLastSheet"
          />

          <q-btn
            push
            label="Rename current Sheet"
            @click="ndt_RenameSheet"
          />

          <q-separator />

          <p class="text-subtitle1">Change event</p>

          <q-btn
            push
            label="Add change event handler to Sheet1"
            @click="ndt_add_event"
          />

          <q-separator />

        </div>
      </q-page>
  `,
}
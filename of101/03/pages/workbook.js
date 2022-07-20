import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Workbook',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'Workbook'
    const log = ref('Dữ liệu sẽ hiện ra ở đây')
    const files = ref(null)

    /**
     * Phương thức dùng để đọc ra địa chỉ ô đang được chọn trên sheet
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#get-the-active-cell-or-selected-range
     */
    const ndt_getActiveCell = () => {

      window.Excel.run(async (context) => {
        let activeCell = context.workbook.getActiveCell()
        activeCell.load("address")
        await context.sync()

        console.log("The active cell is " + activeCell.address)
        log.value = "Địa chỉ ô đang được chọn là: " + activeCell.address
      });

    }

    /**
     * Phương thức dùng để đọc ra địa chỉ vùng đang được chọn trên sheet
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#get-the-active-cell-or-selected-range
     */
    const ndt_getSelectedRange = () => {

      window.Excel.run(async (context) => {
        let selectedRange = context.workbook.getSelectedRange()
        selectedRange.load("address")
        await context.sync()

        console.log("The selected range is " + selectedRange.address)
        log.value = "Địa chỉ vùng chọn là: " + selectedRange.address
      });

    }

    /**
     * Phương thức dùng để lưu Workbook
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#save-the-workbook
     */
    const ndt_SaveWorkbook = () => {

      window.Excel.run(async (context) => {
        context.workbook.save(Excel.SaveBehavior.prompt);
        log.value = "Workbook đã được lưu!"
      });

    }

    /**
     * Phương thức dùng để chèn sheets của một workbook khác vào workbook này
     * Documentation: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-workbooks#insert-a-copy-of-an-existing-workbook-into-the-current-one
     */
    const ndt_InsertSheetsFromOtherWorkbook = () => {
      let reader = new FileReader()

      reader.onload = (event) => {

        window.Excel.run((context) => {
          // Remove the metadata before the base64-encoded string.
          let startIndex = reader.result.toString().indexOf("base64,")
          let externalWorkbook = reader.result.toString().substr(startIndex + 7)

          // Retrieve the current workbook.
          let workbook = context.workbook

          // Set up the insert options. 
          let options = {
            sheetNamesToInsert: [], // Insert all the worksheets from the source workbook.
            positionType: Excel.WorksheetPositionType.after, // Insert after the `relativeTo` sheet.
            relativeTo: "Sheet1" // The sheet relative to which the other worksheets will be inserted. Used with `positionType`.
          }

          // Insert the new worksheets into the current workbook.
          workbook.insertWorksheetsFromBase64(externalWorkbook, options)
          return context.sync()
        })
      }

      // Read the file as a data URL so we can parse the base64-encoded string.
      reader.readAsDataURL(files.value[0]);

    }

    return {
      title, counterStore, log, files,
      ndt_getActiveCell, ndt_getSelectedRange,
      ndt_SaveWorkbook,
      counterLabelFn({ totalSize, filesNumber, maxFiles }) {
        return `${filesNumber} files of ${maxFiles} | ${totalSize}`
      },
      ndt_InsertSheetsFromOtherWorkbook
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el :label="title" />
        </q-breadcrumbs>
        <h6>Tương tác với Excel bằng Add-in</h6>
        <q-separator />
        <pre>{{ log }}</pre>
        <q-separator />
        
        <br />
        <h6 class="text-bold">Workbooks</h6>
        <p caption>Một số phương thức ví dụ để làm việc với Workbooks</p>
        <q-separator /><br />

        <q-btn
          push
          label="Get Active Cell"
          @click="ndt_getActiveCell"
        />

        <q-btn
          push
          label="Get Selected Range"
          @click="ndt_getSelectedRange"
        />

        <q-btn
          push
          label="Save Workbook"
          @click="ndt_SaveWorkbook"
        />

        <div class="q-pa-md">
          <p caption>Chèn sheets của 1 workbook khác vào workbook này. Lưu ý, vì là demo, nên Sheet hiện tại cần có 1 sheet tên là "Sheet1" để tham chiếu.</p>
          <div class="q-gutter-md row items-start">
            <q-file
              v-model="files"
              label="Chọn file Excel"
              filled
              counter
              :counter-label="counterLabelFn"
              max-files="1"
              multiple
              style="max-width: 600px;min-width: 300px;"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>

            <q-btn
              push
              label="Insert"
              @click="ndt_InsertSheetsFromOtherWorkbook"
            />

          </div>
        </div>

      </q-page>
  `,
}
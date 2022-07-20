import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Home',

  components: {},

  setup() {
    const { ref } = Vue
    const counterStore = useCounterStore(pinia)
    const title = 'Home page'
    const log = ref('Dữ liệu sẽ hiện ra ở đây')
    const ndt_getActiveCell = () => {

      window.Excel.run(async (context) => {
        let activeCell = context.workbook.getActiveCell()
        activeCell.load("address")
        await context.sync()

        console.log("The active cell is " + activeCell.address)
        log.value = "The active cell is " + activeCell.address
      });

    }

    const ndt_getSelectedRange = () => {

      window.Excel.run(async (context) => {
        let selectedRange = context.workbook.getSelectedRange()
        selectedRange.load("address")
        await context.sync()

        console.log("The selected range is " + selectedRange.address)
        log.value = "The selected range is " + selectedRange.address
      });

    }

    return {
      title, counterStore, log,
      ndt_getActiveCell, ndt_getSelectedRange
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" :label="title" />
        </q-breadcrumbs>
        <h6>Tương tác với Excel bằng Add-in</h6>
        <q-separator />
        <pre>{{ log }}</pre>
        <q-separator />
        
        <br />
        <p class="text-bold">Workbooks</p>
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

      </q-page>
  `,
}
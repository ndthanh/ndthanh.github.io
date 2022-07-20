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

    return {
      title, counterStore, log,
      ndt_getActiveCell
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

      </q-page>
  `,
}
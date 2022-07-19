import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'One',

  setup() {
    const counterStore = useCounterStore(pinia)

    const onSetColor = () => {
      counterStore.increment()
      console.log('counterStore value: ', counterStore.value)

      Quasar.Notify.create('Hi and welcome!')

      window.Excel.run(async context => {
        const range = context.workbook.getSelectedRange();
        range.format.fill.color = 'green';
        await context.sync();
      });
    }
    return { onSetColor, counterStore };
  },

  template: `
      <h2>Component One</h2>
      <p>Counter: {{ counterStore.value }}</p>
      <q-btn
        push
        color="primary"
        label="Test OfficeJS Button"
        @click="onSetColor"
      ></q-btn>
  `,
};
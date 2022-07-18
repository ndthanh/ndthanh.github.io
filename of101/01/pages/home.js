import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'

export default {
  name: 'Home',

  setup() {
    const counterStore = useCounterStore(pinia)
    const title = 'Home page'
    return { title, counterStore }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" :label="title" />
        </q-breadcrumbs>
        <h2>This is {{ title }}  </h2>
        <p>Counter value is {{ counterStore.value }}</p>
      </q-page>
  `,
}
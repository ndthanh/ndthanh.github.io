import pinia from '../stores/store.js'
import { useCounterStore } from '../stores/counterStore.js'
import One from '../components/component1.js'

export default {
  name: 'Home',

  components: { One },

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
        <h6>Đây là trang chủ {{ title }}  </h6>
        <One />
      </q-page>
  `,
}
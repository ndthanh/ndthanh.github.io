import One from '../components/component1.js'

export default {
  name: 'Page1',
  components: { One },

  setup() {
    const title = 'Page One'
    return { title }
  },

  template: `
        <q-page padding>
            <q-breadcrumbs>
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el :label="title" />
            </q-breadcrumbs>
            <One></One>
        </q-page>
    `,
};
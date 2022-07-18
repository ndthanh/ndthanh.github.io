export default {
  name: 'Home',

  setup() {
    const title = 'Home page'
    return { title }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" :label="title" />
        </q-breadcrumbs>
        <h1>This is {{ title }}  </h1>
      </q-page>
  `,
}
export default {
  name: 'Home',

  setup() {
    const title = 'Home page'
    return { title }
  },

  template: `
      <q-page padding>
        <h1>This is {{ title }}  </h1>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" :label="title" />
        </q-breadcrumbs>
      </q-page>
  `,
}
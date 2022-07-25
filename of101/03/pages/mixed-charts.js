import LineColumn from '../components/mixed/line-column.js'
import MultipleYAxis from '../components/mixed/multiple-y-axis.js'

export default {
  name: 'MixedCharts',

  components: {
    LineColumn,
    MultipleYAxis
  },

  setup() {
    const title = 'Mixed Charts'

    return {
      title
    }
  },

  template: `
      <q-page padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el icon="home" to="/" />
            <q-breadcrumbs-el :label="title" />
        </q-breadcrumbs>

        <h6 class="text-bold">Mixed charts</h6>
        <p caption>Một số ví dụ làm việc với Mixed charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">
          <LineColumn />
          <MultipleYAxis />         
        </div>
      </q-page>
  `,
}
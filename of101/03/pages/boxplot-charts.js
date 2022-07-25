import BoxplotChart from '../components/boxplot/boxplot-chart.js'

export default {
  name: 'BoxplotCharts',

  components: {
    BoxplotChart
  },

  setup() {
    const title = 'Boxplot Charts'

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

        <h6 class="text-bold">Boxplot charts</h6>
        <p caption>Một số ví dụ làm việc với Boxplot charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">
          <BoxplotChart />
        </div>
      </q-page>
  `,
}
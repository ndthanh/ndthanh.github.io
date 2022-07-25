import LineChart from '../components/line-chart.js'
import LineChartWithDataLabel from '../components/line-chart-with-data-label.js'
import ZoomableTimeseries from '../components/zoomable-timeseries.js'
import LineWithAnnotations from '../components/line-with-annotations.js'
import BrushChart from '../components/brush-charts.js'

export default {
  name: 'Charts',

  components: {
    LineChart,
    LineChartWithDataLabel,
    ZoomableTimeseries,
    LineWithAnnotations,
    BrushChart
  },

  setup() {
    const title = 'Charts'

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

        <h6 class="text-bold">Charts</h6>
        <p caption>Một số ví dụ làm việc với charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">

          <LineChart />
          <LineChartWithDataLabel />
          <ZoomableTimeseries />
          <LineWithAnnotations />
          <BrushChart />

        </div>
      </q-page>
  `,
}
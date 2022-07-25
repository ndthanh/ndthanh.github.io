import LineChart from '../components/line/line-chart.js'
import LineChartWithDataLabel from '../components/line/line-chart-with-data-label.js'
import ZoomableTimeseries from '../components/line/zoomable-timeseries.js'
import LineWithAnnotations from '../components/line/line-with-annotations.js'
import BrushChart from '../components/line/brush-charts.js'
import StepLine from '../components/line/stepline.js'
import GradientLine from '../components/line/gradient-line.js'
import RealtimeLineChart from '../components/line/realtime-line-chart.js'
import DashedLine from '../components/line/dashedline.js'

export default {
  name: 'LineCharts',

  components: {
    LineChart,
    LineChartWithDataLabel,
    ZoomableTimeseries,
    LineWithAnnotations,
    BrushChart,
    StepLine,
    GradientLine,
    RealtimeLineChart,
    DashedLine
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

        <h6 class="text-bold">Line charts</h6>
        <p caption>Một số ví dụ làm việc với line charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">

          <LineChart />
          <LineChartWithDataLabel />
          <ZoomableTimeseries />
          <LineWithAnnotations />
          <BrushChart />
          <StepLine />
          <GradientLine />
          <RealtimeLineChart />
          <DashedLine />

        </div>
      </q-page>
  `,
}
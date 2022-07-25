import AreaChart from '../components/area/area-chart.js'
import SplineChart from '../components/area/spline.js'
import StackArea from '../components/area/stacked-area.js'

export default {
  name: 'AreaCharts',

  components: {
    AreaChart,
    SplineChart,
    StackArea
  },

  setup() {
    const title = 'Area Charts'

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

        <h6 class="text-bold">Area charts</h6>
        <p caption>Một số ví dụ làm việc với area charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">
          <AreaChart />
          <SplineChart />
          <StackArea />
        </div>
      </q-page>
  `,
}
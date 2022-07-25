import CandlestickChart from '../components/candlestick/candlestick-chart.js'

export default {
  name: 'CandlestickCharts',

  components: {
    CandlestickChart
  },

  setup() {
    const title = 'Candlestick Charts'

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

        <h6 class="text-bold">Candlestick charts</h6>
        <p caption>Một số ví dụ làm việc với Candlestick charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">
          <CandlestickChart />
        </div>
      </q-page>
  `,
}
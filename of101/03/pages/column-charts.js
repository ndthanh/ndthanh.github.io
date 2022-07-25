import ColumnChart from '../components/column/column-chart.js'
import ColumnChartDataLabel from '../components/column/column-chart-data-label.js'
import StackedColumn from '../components/column/stacked-column.js'
import ColumnMarkers from '../components/column/column-markers.js'

export default {
  name: 'ColumnCharts',

  components: {
    ColumnChart,
    ColumnChartDataLabel,
    StackedColumn,
    ColumnMarkers
  },

  setup() {
    const title = 'Column Charts'

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

        <h6 class="text-bold">Column charts</h6>
        <p caption>Một số ví dụ làm việc với column charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">
          <ColumnChart />         
          <ColumnChartDataLabel />
          <StackedColumn />
          <ColumnMarkers />
        </div>
      </q-page>
  `,
}
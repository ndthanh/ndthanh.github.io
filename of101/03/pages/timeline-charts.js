import TimelineChart from '../components/timelines/timeline-chart.js'

export default {
  name: 'TimelineCharts',

  components: {
    TimelineChart
  },

  setup() {
    const title = 'Timeline Charts'

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

        <h6 class="text-bold">Timeline charts</h6>
        <p caption>Một số ví dụ làm việc với Timeline charts</p>
        
        <q-separator />
        
        <br />

        <div class="q-gutter-sm">
          <TimelineChart />
        </div>
      </q-page>
  `,
}
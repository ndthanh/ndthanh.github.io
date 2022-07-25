export default {
  name: 'BrushChart',

  setup() {
    const { onMounted } = Vue

    onMounted(() => {
      function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = baseval;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

          series.push([x, y]);
          baseval += 86400000;
          i++;
        }
        return series;
      }

      var data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
        min: 30,
        max: 90
      })

      var options = {
        series: [{
          data: data
        }],
        chart: {
          id: 'brush-chart2',
          type: 'line',
          height: 230,
          toolbar: {
            autoSelected: 'pan',
            show: false
          }
        },
        colors: ['#546E7A'],
        stroke: {
          width: 3
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1,
        },
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        }
      };

      var chart = new ApexCharts(document.querySelector("#brush-chart2"), options);
      chart.render();

      var optionsLine = {
        series: [{
          data: data
        }],
        chart: {
          id: 'brush-chart',
          height: 130,
          type: 'area',
          brush: {
            target: 'brush-chart2',
            enabled: true
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date('19 Jun 2017').getTime(),
              max: new Date('14 Aug 2017').getTime()
            }
          },
        },
        colors: ['#008FFB'],
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
          }
        },
        xaxis: {
          type: 'datetime',
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          tickAmount: 2
        }
      };

      var chartLine = new ApexCharts(document.querySelector("#brush-chart"), optionsLine)
      chartLine.render()

    })
  },

  template: `
    <div>
      <div id="brush-chart2"></div>
      <div id="brush-chart"></div>
    </div>
  `
}
import series from '../../assets/stock-prices.js'

export default {
  name: 'AreaChart',

  setup() {
    const { onMounted } = Vue

    onMounted(() => {

      var options = {
        series: [{
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }],
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },

        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        labels: series.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      };

      var chart = new ApexCharts(document.querySelector("#area-chart"), options)
      chart.render()
    })
  },

  template: `<div id="area-chart"></div>`
}
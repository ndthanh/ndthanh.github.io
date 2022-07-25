import home from './pages/home.js'
import UIElement from './pages/ui-elements.js'
import excelProperties from './pages/excel-properties.js'
import workbook from './pages/workbook.js'
import worksheet from './pages/worksheet.js'
import range from './pages/range.js'
import apiInteractions from './pages/api-interactions.js'
import linecharts from './pages/line-charts.js'
import areacharts from './pages/area-charts.js'
import columncharts from './pages/column-charts.js'
import mixedcharts from './pages/mixed-charts.js'
import timelinecharts from './pages/timeline-charts.js'

delete window.history.pushState
delete window.history.replaceState

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: home, name: 'Home' },
    { path: '/ui-elements', component: UIElement, name: 'UIElement' },
    { path: '/excel-properties', component: excelProperties, name: 'ExcelProperties' },
    { path: '/workbook', component: workbook, name: 'Workbook' },
    { path: '/worksheet', component: worksheet, name: 'Worksheet' },
    { path: '/range', component: range, name: 'Range' },
    { path: '/api-interactions', component: apiInteractions, name: 'APIInteractions' },
    { path: '/line-charts', component: linecharts, name: 'LineCharts' },
    { path: '/area-charts', component: areacharts, name: 'AreaCharts' },
    { path: '/column-charts', component: columncharts, name: 'ColumnCharts' },
    { path: '/mixed-charts', component: mixedcharts, name: 'MixedCharts' },
    { path: '/timeline-charts', component: timelinecharts, name: 'TimelineCharts' },
  ]
})
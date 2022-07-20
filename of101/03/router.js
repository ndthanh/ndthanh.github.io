import home from './pages/home.js'
import UIElement from './pages/ui-elements.js'
import excelProperties from './pages/excel-properties.js'
import workbook from './pages/workbook.js'
import worksheet from './pages/worksheet.js'

delete window.history.pushState
delete window.history.replaceState

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: home, name: 'Home' },
    { path: '/ui-elements', component: UIElement, name: 'UIElement' },
    { path: '/excel-properties', component: excelProperties, name: 'ExcelProperties' },
    { path: '/workbook', component: workbook, name: 'Workbook' },
    { path: '/worksheet', component: worksheet, name: 'Worksheet' }
  ]
});
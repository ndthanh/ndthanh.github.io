import home from './pages/home.js'
import page1 from './pages/page1.js'
import excelProperties from './pages/excel-properties.js'

delete window.history.pushState
delete window.history.replaceState

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: home, name: 'Home' },
    { path: '/page1', component: page1, name: 'Page1' },
    { path: '/excel-properties', component: excelProperties, name: 'ExcelProperties' }
  ]
});
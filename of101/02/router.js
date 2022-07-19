import home from './pages/home.js'
import buttons from './pages/buttons.js'
import excelProperties from './pages/excel-properties.js'

delete window.history.pushState
delete window.history.replaceState

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: home, name: 'Home' },
    { path: '/buttons', component: buttons, name: 'Buttons' },
    { path: '/excel-properties', component: excelProperties, name: 'ExcelProperties' }
  ]
});
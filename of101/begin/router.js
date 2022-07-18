import home from './pages/home.js'
import page1 from './pages/page1.js'
import page2 from './pages/page2.js'

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: home },
    { path: '/page1', component: page1 },
    { path: '/page2', component: page2 }
  ]
})
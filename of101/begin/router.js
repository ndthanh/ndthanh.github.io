import home from './pages/home.js'
import page1 from './pages/page1.js'

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: home, name: 'Home' },
    { path: '/page1', component: page1, name: 'Page1' }
  ]
});
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: require('../pages/FirstPage').default
  },
  {
    path: '/about',
    name: 'About',
    component: require('../pages/About').default
  },
  {
    path: '/login',
    name: 'register',
    component: require('../pages/About').default
  },
  {
    path: '/register',
    name: 'register',
    component: require('../pages/About').default
  },
  {
    path: '/notfound',
    name: 'error404',
    component: require('../pages/404').default
  }
  ]
})

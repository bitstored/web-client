import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'home',
      components: require('../App.vue').default
    },
    {
      path: '/about',
      name: 'About',
      components: require('../pages/About.vue').default
    },
    {
      path: '/login',
      name: 'register',
      components: require('../App.vue').default
    },
    {
      path: '/register',
      name: 'register',
      components: require('../App.vue').default
    },
    {
      path: '/notfound',
      name: 'error404',
      components: require('../App.vue').default
    }
  ]
})

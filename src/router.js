import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component() { return import("./views/Home.vue") }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      children: [
        {
          path: '/home',
          name: 'about-home',
          component() { return import("./views/Home.vue") }
        }
      ]
    }
  ]
})

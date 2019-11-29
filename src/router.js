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
      path: '/story',
      name: 'story',
      component: () => import('./views/Story.vue')
    },
    {
      path: "/upload",
      name: "upload",
      component: () => { return import("./views/Upload.vue") }
    },
    {
      path: "/me",
      name: "me",
      component: () => { return import("./views/Me.vue") }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    }
  ]
})

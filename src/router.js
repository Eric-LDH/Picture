import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
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
      path: "/",
      name: "login",
      component: () => import("./views/Login.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    next(true);
  }
  else {
    if (sessionStorage.getItem("token")) {
      next(true);
    }
    else
    {
      alert("当前用户凭证失效，请重新登录")
      next("/");
    }
  }
  // if (this.store.state.user.token) {
  //   next(true);
  // }
  // else {
  //   alert("当前用户凭证失效，请重新登录")
  //   next("/");
  // }
})

export default router
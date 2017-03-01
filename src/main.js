// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import { router } from './router'
import store from './store'

import { initState, setAuthed } from './store/actions'

Vue.use(VueRouter)
// Vue.use(Vuex)


router.beforeEach((to, from, next) => {
  // console.log(store)
  if(to.path !== '/user/profile' && store.getters.authed && !store.getters.identity) {
    // 已登录，但是没有用户名
    next({
        path: '/user/profile',
        query: { redirect: to.fullPath }
      })
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    next()
    return
    if (!store.getters.authed) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

initState(store)

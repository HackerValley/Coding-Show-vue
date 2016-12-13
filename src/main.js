// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import Index from './components/Index'
import UserLogin from './components/userLogin'
import UserReg from './components/userReg'
import Add from './components/add'
import Publish from './components/publish'
import Develop from './components/develop'

Vue.use(VueRouter)
Vue.use(Vuex)

/* 启用路由 */
const routes = [{
  path: '/',
  component: Index
},{
  path: '/login',
  component: UserLogin
},{
  path: '/add',
  component: Add
},{
  path: '/publish',
  component: Publish
},{
  path: '/develop',
  component: Develop
},{
  path: '/reg',
  component: UserReg
}]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

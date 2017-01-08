// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import PageMap from './components/pageMap'
import Home from './components/home'
import UserLogin from './components/userLogin'
import UserReg from './components/userReg'
import UserProfile from './components/userProfile'
import Add from './components/add'
import Modify from './components/modi'
import Publish from './components/publish'
import Develop from './components/develop'
import AdminSkill from './components/adminSkill'
import AdminProject from './components/adminProject'
import AdminExpert from './components/adminExpert'
import Detail from './components/detail'

import store from './store'

import { initState } from './store/actions'

Vue.use(VueRouter)
// Vue.use(Vuex)

/* 启用路由 */
const routes = [{
  path: '/',
  redirect: '/page-map'
},{
  path: '/page-map',
  component: PageMap
},{
  path: '/Home',
  component: Home
},{
  path: '/Home/:page_num',
  component: Home
},{
  path: '/user/login',
  component: UserLogin
},{
  path: '/user/reg',
  component: UserReg
},{
  path: '/user/profile',
  component: UserProfile
},{
  path: '/user/profile/:id',
  component: UserProfile
},{
  path: '/add',
  component: Add
},{
  path: '/modi',
  redirect: '/add'
},{
  path: '/modi/:id',
  component: Modify
},{
  path: '/detail/:id',
  component: Detail
},{
  path: '/user/publish',
  component: Publish
},{
  path: '/user/develop',
  component: Develop
},{
  path: '/admin/skill',
  component: AdminSkill
},{
  path: '/admin/expert',
  component: AdminExpert
},{
  path: '/admin/project',
  component: AdminProject
}]

const router = new VueRouter({
  /*mode: 'history',*/
  routes
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

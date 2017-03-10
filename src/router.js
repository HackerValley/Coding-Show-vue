import VueRouter from 'vue-router'
import { logOut } from './api/request.js'
/* 使用 AMD 风格 require resolve 懒加载*/

import PageMap from './components/pageMap'
// const PageMap = resolve => require (['./components/pageMap'], resolve)

const Home = resolve => require(['./components/home'], resolve)

const UserLogin = r => require.ensure([], () => r(require('./components/userLogin')), '/user')
const UserReg = r => require.ensure([], () => r(require('./components/userReg')), '/user')
const UserProfile = r => require.ensure([], () => r(require('./components/userProfile')), '/user')

const Add = r => require.ensure([], () => r(require('./components/add')), '/add')
const Modify = r => require.ensure([], () => r(require('./components/modi')), '/add')
const Detail = r => require.ensure([], () => r(require('./components/detail')), '/add')

const Release = r => require.ensure([], () => r(require('./components/release')), '/user/release')
const Develop = r => require.ensure([], () => r(require('./components/develop')), '/user/release')

const AdminSkill = r => require.ensure([], () => r(require('./components/adminSkill')), '/admin/skill')
const AdminProject = r => require.ensure([], () => r(require('./components/adminProject')), '/admin/skill')
const AdminExpert = r => require.ensure([], () => r(require('./components/adminExpert')), '/admin/skill')

/* 启用路由 */
const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/page-map',
  component: PageMap
}, {
  path: '/home',
  component: Home,
  children: [
    {
      path: ':page',
      component: Home
    }
  ]
}, {
  path: '/user/logout',
  beforeEnter(to, from, next) {
    console.log('退出登陆')
    // 此处不能执行 store 的操作
    logOut((x) => {
      console.log(x)
    })
    next('/')
  }
}, {
  path: '/user/login',
  component: UserLogin
}, {
  path: '/oauth2/success',
  redirect: '/user/login'
}, {
  path: '/user/reg',
  component: UserReg
}, {
  path: '/user/profile',
  component: UserProfile
}, {
  path: '/user/profile/:id',
  component: UserProfile
}, {
  path: '/add',
  component: Add,
  meta: { requiresAuth: true },
  beforeEnter: (to, from, next) => {
    // console.log(from, to)
    next()
  }
}, {
  path: '/modi/:id',
  component: Add
}, {
  path: '/detail/:id',
  component: Detail
}, {
  path: '/user/release',
  component: Release,
  meta: { requiresAuth: true },
  children: [
    {
      path: ':page',
      component: Release,
      meta: { requiresAuth: true }
    }
  ]
}, {
  path: '/user/develop',
  component: Develop,
  children: [
    {
      path: ':page',
      component: Develop
    }
  ]
}, {
  path: '/admin/skill',
  component: AdminSkill,
  meta: { requiresAuth: true }
}, {
  path: '/admin/expert',
  component: AdminExpert,
  meta: { requiresAuth: true }
}, {
  path: '/admin/project',
  component: AdminProject,
  meta: { requiresAuth: true }
}]

export const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


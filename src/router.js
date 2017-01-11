import VueRouter from 'vue-router'

/* 使用 AMD 风格 require resolve 懒加载*/

import PageMap from './components/pageMap'
// const PageMap = resolve => require (['./components/pageMap'], resolve)

const Home = resolve => require (['./components/home'], resolve)

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
  redirect: '/page-map'
},{
  path: '/page-map',
  component: PageMap
},{
  path: '/Home',
  component: Home,
  children: [
    {
      path: ':id',
      component: Home
    }
  ]
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
  component: Modify,
  children: [
    {
      path: ':id',
      component: Modify
    }
  ]
},{
  path: '/detail/:id',
  component: Detail
},{
  path: '/user/release',
  component: Release,
  children: [
    {
      path: ':id',
      component: Release
    }
  ]
},{
  path: '/user/develop',
  component: Develop,
  children: [
    {
      path: ':id',
      component: Develop
    }
  ]
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

export const router = new VueRouter({
  mode: 'history',
  routes
})
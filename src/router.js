import VueRouter from 'vue-router'

/* 使用 AMD 风格 require resolve 懒加载*/

const PageMap = resolve => require (['./components/pageMap'], resolve)
const Home = resolve => require (['./components/home'], resolve)
const UserLogin = resolve => require (['./components/userLogin'], resolve)
const UserReg = resolve => require (['./components/userReg'], resolve)
const UserProfile = resolve => require (['./components/userProfile'], resolve)
const Add = resolve => require (['./components/add'], resolve)
const Modify = resolve => require (['./components/modi'], resolve)
const Release = resolve => require (['./components/release'], resolve)
const Develop = resolve => require (['./components/develop'], resolve)
const AdminSkill = resolve => require (['./components/adminSkill'], resolve)
const AdminProject = resolve => require (['./components/adminProject'], resolve)
const AdminExpert = resolve => require (['./components/adminExpert'], resolve)
const Detail = resolve => require (['./components/detail'], resolve)

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
  path: '/user/release',
  component: Release
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

export const router = new VueRouter({
  /*mode: 'history',*/
  routes
})
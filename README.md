# coding-show-vue

## TODO

- [x]	oAuth2
- [x]	Modi/:_id
- [x] 首页item信息块显示图片
- 文件上传
 - [x] 文件上传类型校验
 - [x] 文件上传框的状态重置
 - [x] 舍弃使用文件
 - [ ] 弃用文件的待删除列表
 - [x] 图片文件的显示
 - [ ] 图片文件的后缀名判断
 - [ ] 添加项目时，检查是否有未完成的准备上传
 - [ ] 上传的进度
 - [ ] 预览上传
上传功能模块化
- [x] Nav 样式优化
 - [x] 用户登录头像状态
 - [x] 下拉菜单。*使用了svg动画*
 - [ ] Logo
- [x] 详情页面
- [ ] list 页面数据缓存。每次页面跳转都请求远程数据是不必要的
- [x] api.js中请求失败的错误信息处理方式，[参考](https://github.com/vuejs/vue-router/tree/dev/examples/data-fetching)
  - 更改request.js中api的参数和回调函数传入顺序
- [x] auth-flow 参照vue-router示例，进行验证。
- [x] 后台api
- [x] 页码做成使用Vuex的，这样就不需要每个页面都重复写一遍页码部分的代码了。可以做成组件。
- [x] 分页的路由。
 - [x] 动态路由 匹配
- [x] router 文件独立，设置懒加载。
- [x] router-view 添加过渡效果。
- 导航跳转
 - [x] 添加和修改复用一个vue模板
 - [x] 添加和修改成功之后，分别跳转home页、详情页

> Vue version Coding-Show

## 已创建文件结构
文件结构：
```
src/
  api/
    request.js
  components/
    common/
        toast.vue
    header.vue           [init]
    footer.vue           [init]
    searchBar.vue        [init]
    adminTitle.vue       [init]
    adminSkill.vue
    adminRequest.vue
    adminProfessor.vue
    userLogin.vue
    userReg.vue
    index.vue
    release.vue
    develop.vue
    detail.vue
    add.vue              [larry]
    modi.vue             [larry]
  store/                Vuex
    modules/
      toasts.js
    actions.js
    getter.js
    index.js
    mutation-types.js
    mutation.js
  app.vue
  main.js
index.html
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

已安装: vue-router、vuex、bootstrap、axios

组件：
    toast.vue
    使用Vuex管理状态。
    提示信息自动消失。

Vuex:
    toast 在module中

## ajax请求位置：api/request.js

## 每一个单页中使用toast的方法：
在page页中，如home.vue中
1. 引入mapActions
```
  import { mapActions } from 'vuex'
```
2. 引入vuex中的actions
`methods: mapActions(['newToast'])`
    或
```
methods: {
    ...mapActions(['newToast']),
    其他方法
}
```
3. 使用newToast
```
methods:{
    test () {
        this.newToast({
            type: 'info', // 可选bootstrap中的info|warning|danger|success
            message: '提示信息'
        })
    }
}
```
## 未使用的接口
页面我开发的项目、我发布的项目，使用home页面的接口显示数据
接口调好之后，修改api地址

## 页码的设计
使用computed属性，计算可以用的页面数组，然后通过列表渲染的方式显示。

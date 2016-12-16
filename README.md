# coding-show-vue

// 分支 feature/withVuex

使用vuex存储数据，使用vuex的module特性，每个页面的数据分成多个模块分开进行存储  
** Vuex 模块划分**
 - 新增页面 / 添加页面   
 - 项目列表页面
 - 项目详细页面
 - 登陆页面
 - 个人资料页面
 - 后台管理页面
 
### Vuex 文件夹结构  
``` 
 src/
   store/
      modules/
        proj-list.js
        proj-details.js
        proj-create.js
        user-reg.js
        user-profile.js
        admin-skill.js
        admin-request.js
        admin-professor.js
      mutations.js
      mutation-type.js
      actions.js
    ...
```

> Vue version Coding-Show

## 已创建文件结构
文件结构：
```
src/
  components/
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
    publish.vue
    develop.vue
    detail.vue
    add.vue              [larry]
    modi.vue             [larry]
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
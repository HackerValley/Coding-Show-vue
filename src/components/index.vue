<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h3>临时索引</h3>
      <p>页面打开均为空。</p>
      <div class="list-group">
        <router-link class='list-group-item' to="/user/publish"><span class="badge">·</span>发布的项目</router-link>
        <router-link class='list-group-item' to="/user/develop"><span class="badge">·</span>开发的项目</router-link>
        <router-link class='list-group-item' to="/add"><span class="badge">·</span>添加项目</router-link>
        <router-link class='list-group-item' to="/modi/67987"><span class="badge">·</span>修改项目</router-link>
        <router-link class='list-group-item' to="/detail"><span class="badge">·</span>项目详情</router-link>
        <router-link class='list-group-item' to="/user/login"><span class="badge">·</span>登陆</router-link>
        <router-link class='list-group-item' to="/user/reg"><span class="badge">·</span>注册</router-link>
        <router-link class='list-group-item' to="/user/profile"><span class="badge">·</span>个人资料</router-link>
        <router-link class='list-group-item' to="/admin/request"><span class="badge">·</span>项目审核</router-link>
        <router-link class='list-group-item' to="/admin/skill"><span class="badge">·</span>技能审核</router-link>
        <router-link class='list-group-item' to="/admin/professor"><span class="badge">·</span>专家审核</router-link> 
      </div>
    </div>
  </div>
</template>

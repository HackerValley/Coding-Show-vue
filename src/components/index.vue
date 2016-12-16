<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h3>临时索引</h3>
      <p>页面打开均为空。</p>
      <div class="list-group">
        <router-link class='list-group-item' to="/publish">发布的项目</router-link>
        <router-link class='list-group-item' to="/develop">开发的项目</router-link>
        <router-link class='list-group-item' to="/add"><span class="badge">·</span>添加项目</router-link>
        <router-link class='list-group-item' to="/modi">修改项目</router-link>
        <router-link class='list-group-item' to="/detail">项目详情</router-link>
        <router-link class='list-group-item' to="/login">登陆</router-link>
        <router-link class='list-group-item' to="/reg">注册</router-link>
        <router-link class='list-group-item' to="/user/profile">个人资料</router-link>
        <router-link class='list-group-item' to="/admin/request">项目审核</router-link>
        <router-link class='list-group-item' to="/admin/skill">技能审核</router-link>
        <router-link class='list-group-item' to="/admin/professor">专家审核</router-link> 
      </div>
    </div>
  </div>
</template>

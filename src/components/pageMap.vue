<template>
  <div>
    <div class="row">
      <div class="col-xs-4">
        <h3>临时索引</h3>
        <p>验证</p>
        <ul>
          <li>翻页效果</li>
          <li>提示组件</li>
          <li>页码组件</li>
        </ul>
        <hr> <h4>显示一个toast 消息</h4>
        <p> Vuex 操作 <small>1.5s自动消失</small><br>
          <a class="btn btn-primary" @click="act1_add">新Toast</a>
          <a class="btn btn-primary" @click="newToast()">newToast</a>
        </p>
      </div>
      <div class="col-xs-7">
        <div class="list-group">
          <router-link class='list-group-item' to="/user/release"><span class="badge">/user/release</span>发布的项目</router-link>
          <router-link class='list-group-item' to="/user/develop"><span class="badge">/user/develop</span>开发的项目</router-link>
          <router-link class='list-group-item' to="/add"><span class="badge">1</span><span class="badge">/add</span>添加项目</router-link>
          <router-link class='list-group-item' to="/modi/67987"><span class="badge">2</span><span class="badge">/modi/67987</span>修改项目</router-link>
          <router-link class='list-group-item' to="/detail"><span class="badge">/detail</span>项目详情</router-link>
          <router-link class='list-group-item' to="/user/login"><span class="badge">/user/login</span>登陆</router-link>
          <router-link class='list-group-item' to="/user/reg"><span class="badge">/user/reg</span>注册</router-link>
          <router-link class='list-group-item' to="/user/profile"><span class="badge">/user/profile</span>个人资料</router-link>
          <router-link class='list-group-item' to="/admin/request"><span class="badge">/admin/request</span>项目审核</router-link>
          <router-link class='list-group-item' to="/admin/skill"><span class="badge">/admin/skill</span>技能审核</router-link>
          <router-link class='list-group-item' to="/admin/professor"><span class="badge">/admin/professor</span>专家审核</router-link> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      toastTop () {
        // this.$emit()
      },
      act1_add () {
        // Vuex act 1
        let tmpToast = {type:'danger',message:'红色信息'}
        this.newToast(tmpToast)
        // this.$store.dispatch('newToast', tmpToast)
      },
      act2_shift () {
        // Vuex act 2
        this.$store.dispatch('shiftone')
      },
      act3_clear () {
        // Vuex act 3
        this.$store.dispatch('clearAll')
      },
      act4 () {
        // Vuex act 4
        this.newToast({})
      },
      ...mapActions([
          'newToast'
        ])
    }
  }
</script>
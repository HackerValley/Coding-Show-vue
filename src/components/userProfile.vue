<template>
  <div>
    <div class="row">
      <h2>个人信息 <span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
          <dl>
            <dt>id</dt>
            <dd>{{ userdata._id }}</dd>
            <dt>用户名</dt>
            {{ userdata.username }}
            <dd>{{ userdata.username }}</dd>
            <dt>邮箱</dt>
            <dd>{{ userdata.email }}</dd>
            <dt>昵称</dt>
            <dd>{{ userdata.nickname }}</dd>
            <dt>技能</dt>
            <dd>{{ userdata.skill }}</dd>
            <dt>最后一次登录时间</dt>
            <dd>{{ userdata.last_login_time }}</dd>
            <dt>创建时间</dt>
            <dd>{{ userdata.create_time }}</dd>
            <dt>头像</dt>
            <dd>{{ userdata.avatar }}</dd>
            <dt>账号绑定</dt>
            <dd>{{ userdata.sns_id }}</dd>
            <dt>第三方登陆类型</dt>
            <dd>{{ userdata.sns_type }}</dd>
            <dt>电话</dt>
            <dd>{{ userdata.telephone }}</dd>
            <dt>等级</dt>
            <dd>{{ userdata.level }}</dd>
          </dl>
      </div>
    </div>
  </div>
</template>
<style>
  dd{margin-left: 3em;}
</style>
<script>
import * as api from '../api/request'

  export default {
    created () {
      // 渲染页面之前，获取登录信息，如果获取不到，说明不是合法的登陆状态，进行登出操作
      this.getUserInfo()
    },
    data () {
      return {
        userdata:{
          _id: '',
          realname: '',
          username: '',
          nickname: '',
          skill: [],
          last_login_time: '',
          create_time: '',
          avatar: '',
          sns_id: '',
          sns_type: 0,
          telephone: 0,
          level: 0,
          email: '',
        }
      }
    },
    methods: {
      getUserInfo () {
        api.userInfo((x)=>{
          console.log(x)
          if(x[0] === '<') {
            console.log('没有登陆')
            this.$store.dispatch('setAuthed', false)
            this.$router.replace({ path: '/user/login' })
            return
          }
          if (x.status === 0) {
            this.userdata = x.data
          }
        })
      }
    }
  }
</script>
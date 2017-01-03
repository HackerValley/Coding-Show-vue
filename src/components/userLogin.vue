<template>
  <div class="col-xs-10 col-xs-offset-1">
      <div class="row">
          <h2>注册 <span class="fr"><small><router-link to="/login">已有账户登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/'>返回首页</router-link></small></span></h2>
          <hr>
      </div>
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1">
          <form action="" role="form" class="form-horizontal">
            <div class="form-group">
              <label for="userName" class="col-xs-3 col-sm-2 control-label ">用户名</label>
              <div class="col-xs-9 col-sm-8 col-md-6">
                <input type="text" name="username" id="userName" placeholder="您的用户名" class="form-control" v-model='username'>
                <label for="rememberUsername" class="control-label "></label>
                <input type="checkbox" name="rememberUsername" v-model='remember'>记住用户名
                <p class="form-control-static text-muted">用户名或邮箱</p>
              </div>
            </div>
            <div class="form-group">
              <label for="passwd" class="col-xs-3 col-sm-2 control-label ">密码</label>
              <div class="col-xs-9 col-sm-8 col-md-6">
                <input type="password" name="passwd" id="passwd" placeholder="请输入密码" class="form-control" v-model='passwd'>
                <p class="form-control-static text-muted">请输入密码</p>
              </div>
            </div>
            <div class="checkbox">
            </div>
            <div class="from-group form-group-lg col-xs-offset-4 col-xs-2">
              <a class="btn btn-lg btn-info" @click.prevent='turn'>Checkbox</a>
              <a class="btn btn-lg btn-info" @click.prevent='login'>登录</a>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>
<script>
import * as api from '../api/request.js'
import _ from 'lodash'

export default {
  beforeCreate () {
    // 如果登陆，则跳转到
    if(this.$store.state.authed){
      console.log('已经登陆了？')
      this.$router.push({ path: '/user/publish' })
    }
  },
  data () {
    return {
      remember: eval(localStorage.getItem('remember')) || false,
      // 登陆时使用localsotrage中的loginuser
      loginuser: this.$store.state.lastuser,
      username: this.$store.state.lastuser || '',
      passwd: ''
    }
  },
  watch: {
    remember: function (newValue) {
      console.log('Changed to ' + newValue)
      console.log(this.username)
      localStorage.setItem('remember', this.remember)
      if(!this.remember){
        localStorage.removeItem('loginuser')
      }else{
        let targetVal = this.username || this.lastusername
        localStorage.setItem('loginuser', targetVal)
      }
    },
    username: function (newValue) {
      // 将username set到localStorage中去
      this.setusername()
    }
  },
  computed: {
    logindata () {
      return {
        username: this.username,
        password: this.passwd
      }
    }
  },
  methods: {
    turn () {
      this.remember = !this.remember
    },
    setusername:_.debounce(
        function () {
          console.log(this.username)
          if(this.remember){
            localStorage.setItem('loginuser', this.username)
          }
        },
        500
      ),
    formvalid () {
      let varr = ['username','password']
      let result = true
      for (let i = 0; i < varr.length; i++){  
        if(this.logindata[varr[i]] === ''){
          console.log(`字段${varr[i]}为空`)
          result = false
        }
      }
      return result
    },
    login () {
      if(!this.formvalid()){
        console.log('valid 未通过')
        return null
      }
      console.log('尝试登陆')
      api.userLogin((x)=>{
        console.log(x)
        if(x.status === 0){
          console.log('登陆成功')
          // 跳转到首页
          this.$store.dispatch('setAuthed', true)
          this.$store.dispatch('setUser', this.logindata.username)
          this.$router.push({ path: '/user/publish' })
        } 
      },{ logindata:this.logindata })
    }
  }
}
</script>
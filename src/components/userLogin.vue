<template>
  <div>
    <div class="row">
      <h2>登陆 <span class="fr"><small><router-link to="/login">已有账户登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to='/'>返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1">
        <form action="" role="form" class="form-horizontal">
          <div class="form-group">
            <label for="userName" class="col-xs-3 col-sm-2 control-label ">用户名</label>
            <div class="col-xs-9 col-sm-8 col-md-6">
              <input type="text" name="username" id="userName" placeholder="您的用户名" class="form-control" v-model='username'>
              <p class="form-control-static text-muted">用户名</p>
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
            <a class="btn btn-lg btn-info" @click.prevent='login'>登录</a>
          </div>
        </form>
      </div>
    </div>
    <div class="row thirdLogin">
      <div class="col-xs-10 col-xs-offset-1">
        <hr> 第三方登录：
        <a href="/api/user/oauth2/github" class="btn btn-default">Github</a>
        <a href="/api/user/oauth2/weibo" class="btn btn-default">weibo</a>
      </div>
    </div>
  </div>
</template>
<script>
  import * as api from '../api/request.js'
  import _ from 'lodash'
  import {
    mapActions
  } from 'vuex'

  export default {
    beforeCreate() {
      // 如果登陆，则跳转到
      if (this.$store.state.authed) {
        console.log('已经登陆了？')
        this.$router.go(-1)
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        vm.fetchLoginStatus()
      })
    },
    beforeRouteUpdate() {
      if (this) {
        this.fetchLoginStatus()
      }
    },
    data() {
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
        if (!this.remember) {
          localStorage.removeItem('loginuser')
        } else {
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
      logindata() {
        return {
          username: this.username,
          password: this.passwd
        }
      }
    },
    methods: {
      ...mapActions([
        'newToast'
      ]),
      setusername: _.debounce(
        function () {
          console.log(this.username)
          if (this.remember) {
            localStorage.setItem('loginuser', this.username)
          }
        },
        500
      ),
      formvalid() {
        let varr = ['username', 'password']
        let result = true
        for (let i = 0; i < varr.length; i++) {
          if (this.logindata[varr[i]] === '') {
            console.log(`字段${varr[i]}为空`)
            this.newToast({
              type: 'danger',
              message: `字段${varr[i]}为空`
            })
            result = false
          }
        }
        return result
      },
      login() {
        if (!this.formvalid()) {
          console.log('valid 未通过')
          this.newToast({
            type: 'danger',
            message: 'Valid 未通过'
          })
          return null
        }
        console.log('尝试登陆')
        api.userLogin({
          logindata: this.logindata
        }, (err, x) => {
          // console.log(x)
          if (err) {
            console.log(err)
            this.newToast({
              type: 'danger',
              message: err
            })
            return
          }
          if (x.status === 0) {
            console.log('登陆成功')
            this.newToast({
              type: 'success',
              message: this.logindata.username + ' 登陆成功'
            })
            // 跳转到首页
            this.$store.dispatch('setAuthed', true)
            var identity = {
              _id: x.data._id,
              avatar: x.data.avatar,
              nickname: x.data.nickname,
              level: x.data.level,
              skill: x.data.skill,
              last_login_time: x.data.last_login_time,
              sns_type: x.data.sns_type
            }
            this.$store.dispatch('setIdentity', identity)
            this.$store.dispatch('setUser', this.logindata.username)
            this.$router.replace({
              path: '/user/release'
            })
          } else {
            this.newToast({
              type: 'danger',
              message: x.msg
            })
          }
        })
      },
      fetchLoginStatus() {
        console.log('验证登录状态')
        api.loginInfo((err, x) => {
          // console.log(x)
          if (err) {
            console.error(err)
            return
          }
          // console.log(x)
          if (typeof x === 'string' && x[0] === '<') {
            this.$store.dispatch('setAuthed', false)
            return 0
          }
          if (x.status != 0) {
            this.newToast({
              type: 'danger',
              message: '服务器有点异常，登录功能可能无用'
            })
            return
          }
          this.$store.dispatch('setAuthed', true)
          var identity = {
            _id: x.data._id,
            avatar: x.data.avatar,
            nickname: x.data.nickname,
            level: x.data.level,
            skill: x.data.skill,
            last_login_time: x.data.last_login_time,
            sns_type: x.data.sns_type
          }
          this.$store.dispatch('setIdentity', identity)
          if (x.data.username) {
            this.newToast({
              type: 'success',
              message: '已经登录'
            })
            // 并跳转
            this.$store.dispatch('setUser', x.data.username)
            this.$router.replace({
              path: '/user/release'
            })
          } else {
            // 需要补充用户的注册信息，至少补充一个用户名
            this.newToast({
              type: 'info',
              message: '需补充信息，至少填写一下用户名'
            })
            this.$store.dispatch('setUser', '')
            this.$router.replace({
              path: '/user/profile'
            })
          }
        })
      }
    }
  }

</script>
<style>
  .thirdLogin {
    padding-top: 2em;
  }

</style>

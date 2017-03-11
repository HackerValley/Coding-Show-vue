<template>
  <div>
    <div class="row">
      <h2>信息 - {{ userdata.nickname || userdata.username }}<span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row profile">
      <div class="col-xs-12 col-sm-9 col-md-8 col-lg-6">
        <div class="row">
          <div class="col-xs-12 text-center public">
            <div class="col-xs-5">
              <img class='figure' v-if='userdata.avatar' :src="userdata.avatar" alt="userdata.nickname">
            </div>
            <div class="col-xs-7 meta">昵称 {{ userdata.nickname }}</div>
            <div class="col-xs-7 meta">用户名 {{ userdata.username }}</div>
            <div class="col-xs-7 meta">等级 {{ userdata.level }}</div>
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            技能 {{ userdata.skill }}
          </div>
        </div>
        <div class="row" v-if="!publish">
          <div class="col-xs-10 col-xs-offset-1">
            id {{ userdata._id }}
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            邮箱 {{ userdata.email }}
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            电话 {{ userdata.telephone }}
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            账号绑定 {{ userdata.sns_id }}
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            第三方登陆类型 {{ userdata.sns_type }}
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            最后一次登录时间 {{ userdata.last_login_time | showTime }}
          </div>
          <div class="col-xs-10 col-xs-offset-1">
            创建时间 {{ userdata.create_time | showTime }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  dd {
    margin-left: 3em;
  }

  img.figure {
    max-width: 100%;
    border-radius: 2px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .3)
  }

  .profile .meta {
    line-height: 3em
  }
  .profile .public {
    padding-bottom: 2em
  }
  @media screen and ( max-width:576px ) {
  .profile .meta {
    line-height: 2em
  }
}
</style>
<script>
  import * as api from '../api/request'

  export default {
    created() {
      // 渲染页面之前，获取登录信息，如果获取不到，说明不是合法的登陆状态，进行登出操作
      if (this.$route.params.id) {
        this.getUserInfo(this.$route.params.id)
        this.publish = false
      } else {
        this.getLoginInfo()
        this.publish = false
      }
    },
    data() {
      return {
        userdata: {
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
        },
        publish: false
      }
    },
    methods: {
      getLoginInfo() {
        api.loginInfo((err, x) => {
          // console.log(x)
          if (err) {
            console.error(err)
            return
          }
          // console.log(x)
          if (x[0] === '<') {
            console.log('没有登陆')
            this.$store.dispatch('setAuthed', false)
            this.$router.replace({
              path: '/user/login'
            })
            return
          }
          if (x.status === 0) {
            this.userdata = x.data
          }
        })
      },
      getUserInfo(id) {
        api.userInfo(id, (x) => {
          // console.log('userinfo',x)
          if (x[0] === '<') {
            console.log('未登录')
            this.$store.dispatch('setAuthed', false)
            this.$router.replace({
              path: '/user/login'
            })
            return
          }
          if (x.status === 0) {
            this.userdata = x.data
          }
        })
      }
    },
    filters: {
      showTime: function (value) {
        if (!value) return ''
        return new Date(value).toLocaleString()
      }
    }
  }

</script>

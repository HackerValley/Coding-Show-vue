<template>
  <div id="wrapper">
    <header-component></header-component>
    <section class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <transition name='slide-left'>
            <router-view class='child-view'></router-view>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
          <hr>
          <pagination></pagination>
        </div>
      </div>
      <div class="row tip">
        <toast></toast>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import * as api from './api/request'
  import HeaderComponent from './components/common/header'
  import FooterComponent from './components/common/footer'
  import Pagination from './components/common/pagination'
  import Toast from './components/common/toast'
  require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

  export default {
    name: 'app',
    data() {
      return {
        nextNum: 1,
        tips: []
      }
    },
    beforeCreate() {
      // console.log('find this :',this)
      api.loginInfo((err, x) => {
        // console.log(x)
        if(err) {
          console.error(err)
          return
        }
        if (typeof x === 'string' && x[0] === '<') {
          this.$store.dispatch('setAuthed', false)
          this.$store.dispatch('setIdentity', {})
          console.log('未登录')
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
            message: '已登录'
          })
        }
      })
    },
    methods: {
      add2: function (tmptip) {
        console.log(tmptip)
        if (this.tips.length > 4) {
          // console.log( this.tips.length + ' 大于4 ')
          delete this.timers[Object.keys(this.timers)[0]]
          this.shiftTip()
        }
        tmptip = tmptip || {
          type: 'success',
          message: '测试信息'
        }
        // 为message 添加唯一id
        Object.assign(tmptip, {
          id: this.nextNum++
        })
        let idx = this.tips.length
        this.tips.splice(idx, 0, tmptip)
        return idx
      }
    },
    components: {
      HeaderComponent,
      FooterComponent,
      Toast,
      Pagination
    }
  }

</script>
<style>
  .fr {
    float: right
  }

  #wrapper {
    background: rgb(244, 244, 244)
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .child-view {
    transition: all .35s;
    width: 100%;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    position: absolute;
    transform: translate(-30px, 0);
  }

</style>

<template>
  <div id="wrapper">
    <header-component>
      <ul class="nav navbar-nav" slot='nav-left'>
        <li><router-link to='/page-map' class="navbar-brand" v-text='sitename'>Coding-Show</router-link></li>
        <li>
          <router-link to='/home'>开源项目</router-link>
        </li>
        <li>
          <router-link to='/' class='disable'>运营的项目</router-link>
        </li>
        <li>
          <router-link to='/admin/skill'>专业用户入口</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right" slot='nav'>
        <li>
          <a @click='add2()'>Add</a>
        </li><li>
          <router-link to='/add'>添加项目</router-link>
        </li>
        <li>
          <router-link to='/user/publish'>发布的项目</router-link>
        </li>
        <li>
          <router-link to='/user/develop'>开发的项目</router-link>
        </li>
        <li>
          <router-link to='/user/reg' v-if='!authed'>注册</router-link>
        </li>
        <li>
          <router-link to='/user/login' v-if='!authed'>登入</router-link>
        </li>
        <li>
          <router-link to='/user/profile' v-if='authed'>个人资料</router-link>
        </li>
        <li>
          <a v-if='authed' @click.prevent='logout'>登出</a>
        </li>
      </ul>
    </header-component>
    <section class="container">
      <div class="row">
        <router-view></router-view>
      </div>
      <div class="row">
        <pagination></pagination>
      </div>
      <div class="row tip" style="display:none">
        <transition-group name='a-complete'>
          <div :class="'alert-' + tip.type" class="alert alert-dismissible a-complete-item" role="alert" :key='idx' v-for='(tip,idx) in this.$store.state.toasts.toasts'>
            <strong>.</strong> {{ tip.message }}.
          </div>
        </transition-group>
      </div>
      <div class="row tip tip2">
        <toast></toast>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import * as api from './api/request'
import HeaderComponent from './components/header'
import FooterComponent from './components/footer'
import Pagination from './components/common/pagination'
import Toast from './components/common/toast'
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default {
  name: 'app',
  data () {
    return{
      sitename: 'Coding-Show',
      nextNum: 1,
      tips: []
    }
  },
  computed:{
    authed (){
      return this.$store.state.authed
    } 
  },
  methods:{
    logout () {
      api.logOut((x)=>{
        if(x.status === 0){
          this.$store.dispatch('setAuthed', false)
          this.$router.push({path:'/home'})
        } else {
          console.log('登出失败')
        }
      })
    },
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
  
.row.tip{ 
  position: fixed;
  top:6%;
  width: 35%;
  left: 60%;
}

</style>

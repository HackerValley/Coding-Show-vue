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
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import * as api from './api/request'
import HeaderComponent from './components/header'
import FooterComponent from './components/footer'
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default {
  name: 'app',
  data () {
    return{
      sitename: 'Coding-Show',
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
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

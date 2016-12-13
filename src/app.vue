<template>
  <div id="wrapper">
    <header-component>
      <ul class="nav navbar-nav" slot='nav-left'>
        <li><a class="navbar-brand" href="#" v-text='sitename'>Coding-Show</a></li>
        <li>
          <router-link to='/'>开源项目</router-link>
        </li>
        <li>
          <router-link to='/'>运营的项目</router-link>
        </li>
        <li>
          <router-link to='/'>专业用户入口</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right" slot='nav'>
        <li>
          <router-link to='/add'>添加项目</router-link>
        </li>
        <li>
          <router-link to='/publish'>发布的项目</router-link>
        </li>
        <li>
          <router-link to='/develop'>开发的项目</router-link>
        </li>
        <li>
          <router-link to='/reg'>注册</router-link>
        </li>
        <li>
          <router-link to='/login'>登入</router-link>
        </li>
      </ul>
    </header-component>
    <section class="container">
      <div class="col-xs-10 col-xs-offset-1">
        <router-view></router-view>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/header'
import FooterComponent from './components/footer'
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

export default {
  name: 'app',
  data () {
    return{
      sitename: 'Coding-Show'
    }
  },
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

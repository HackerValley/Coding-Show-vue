<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" aria-expanded="false" data-target="navbar" @click='toggleItem'>
          <span class="sr-only">Toggle Navbar</span>
          <span class="icon-bar" data-target="navbar"></span>
          <span class="icon-bar" data-target="navbar"></span>
          <span class="icon-bar" data-target="navbar"></span>
        </button>
        <router-link to='/home' class="navbar-brand" v-text='sitename'>Coding-Show</router-link>
      </div>
      <div class="collapse navbar-collapse" :class="{in:toggles.indexOf('navbar') !== -1 }" id="navbar-collapse">
        <ul class="nav navbar-nav" slot='nav-left'>
          <li>
            <router-link to='/home'>开源项目</router-link>
          </li>
          <!--<li>
            <router-link to='/page-map' class='disable'>运营的项目</router-link>
          </li>
          <li>
            <router-link to='/admin/skill'>专业用户入口</router-link>
          </li>-->
          <slot name="nav-left"></slot>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li v-if='!authed'>
            <router-link to='/user/reg'>注册</router-link>
          </li>
          <li>
            <router-link to='/user/login' v-if='!authed' class='primary'>登入</router-link>
          </li>
          <li class="dropdown" :class="{open: toggles.indexOf('user') !== -1 }" v-if='authed'>
            <a class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false" data-target="user" @click='toggleItem'>
              <span class="avatar" data-target='user'>
                <img :src="identity.avatar" :alt="identity.username" data-target='user'>
              </span>
              <span class="caret" data-target="user"></span>
            </a>
            <ul class="dropdown-menu" @click='toggleClear'>
              <router-link to='/add' active-class='active' tag='li'><a>添加项目</a></router-link>
              <router-link to='/user/release' active-class='active' tag='li'><a>我发布的项目</a></router-link>
              <!--
                <router-link to='/user/develop' active-class='active' tag='li'><a>我开发的项目</a></router-link>
              -->
              <li role="separator" class="divider"></li>
              <router-link to='/user/profile' active-class='active' tag='li'><a>个人资料</a></router-link>
              <li role="separator" class="divider"></li>
              <li> <a v-if='authed' @click.prevent='logout'><span>登出</span></a> </li>
            </ul>
          </li>
          <li class="rich" v-if='authed'>
            <a>&nbsp;</a>
            <div class="detail">

              <transition name="slide-fade">
                <div class="expand" v-if='infopanel' @click='toggleInfo'>
                  <ul class='nav nav-pills nav-stacked'>

                  </ul>
                </div>
              </transition>
            </div>
          </li>

          <slot name="nav"></slot>
        </ul>
      </div>
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
  import * as api from '../../api/request.js'
  export default {
    name: 'header',
    mounted() {
      // 每次重载，刷新一下 用户avatar
    },
    data() {
      // var defaultSides = 10
      // var h = 12 // 默认吞掉的高度
      // var stats = Array.apply(null,{length: defaultSides}).map(() => 100)
      return {
        sitename: 'Coding-Show',
        // h,
        // stats,
        // points: generateDatas(stats,h),
        infopanel: false,
        toggles: []
      }
    },
    watch: {

    },
    computed: {
      authed() {
        return this.$store.state.authed
      },
      identity() {
        if (!this.authed) {
          return {
            username: '',
            avatar: ''
          }
        }
        let username = this.$store.state.identity.username
        let defaultA = '/static/assets/figure_blank.png'
        let avatar = this.$store.state.identity.avatar
        avatar = avatar ? avatar : defaultA
        return {
          username,
          avatar
        }
      }
    },
    methods: {
      logout() {
        api.logOut((x) => {
          if (x.status === 0) {
            this.$store.dispatch('setAuthed', false)
            this.$store.dispatch('setIdentity', {
              username: ''
            })
            this.$router.push({
              path: '/home'
            })
          } else {
            console.log('登出失败')
          }
        })
      },
      toggleInfo() {
        this.infopanel = !this.infopanel
      },
      toggleItem(e) {
        let target = e.target.dataset.target
        if (this.toggles.indexOf(target) === -1) {
          this.toggles.push(e.target.dataset.target)
        } else {
          this.toggles.splice(this.toggles.indexOf(target), 1)
        }
      },
      toggleClear() {
        // if (this.toggles.indexOf('navbar') !== -1) {
        //   this.toggles.splice(this.toggles.indexOf('navbar'), 1)
        // }
        this.toggles = []
      }
    }
  }

</script>

<style>

  /*Header.vue*/

  .navbar-nav .avatar img {
    margin: -15px 0;
    width: 48px;
    height: 48px;
    border-radius: 49%;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .4);
    background: #fff;
    cursor: pointer;
    z-index: 9
  }
  /* .navbar-nav li .avatar img {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  } */
  /* .navbar li .expand {
    border-top: 4px solid sienna;
    position: absolute;
    width: 260px;
    min-height: 100px;
    height: auto;
    border-radius: 10px;
    background: radial-gradient(32px circle at 205px 64px, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1));
    box-shadow: 0 3px 14px -4px rgba(0, 0, 0, .9);
    top: 58px;
    right: -80px;
    z-index: 8;
    overflow: hidden;
    background-position: 0 -64px;
  } */

  .slide-fade-enter-active {
    transition: opacity .3s cubic-bezier(.2, .7, .2, .7), transform .3s linear;
  }

  .slide-fade-leave-active {
    transition: all .2s ease-in;
    opacity: 0;
  }

  .slide-fade-enter {
    transform: translateY(10px);
    opacity: 0;
  }

  @media screen and ( min-width:768px) {}

  @media screen and ( max-width:768px) {}

</style>

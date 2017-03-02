<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <ul class="nav navbar-nav" slot='nav-left'>
        <li>
          <router-link to='/page-map' class="navbar-brand" v-text='sitename'>Coding-Show</router-link>
        </li>
        <li>
          <router-link to='/home'>开源项目</router-link>
        </li>
        <li>
          <router-link to='/' class='disable'>运营的项目</router-link>
        </li>
        <li>
          <router-link to='/admin/skill'>专业用户入口</router-link>
        </li>
        <slot name="nav-left"></slot>
      </ul>
      <ul class="nav navbar-nav navbar-right" slot='nav'>
        <li v-if='!authed'>
          <router-link to='/user/reg'><span class="badge">注册</span></router-link>
        </li>
        <li class="rich" v-if='authed'>
          <a>&nbsp;</a>
          <div class="detail">
            <span class="avatar" v-if="true" @click='toggleInfo'>
            <img :src="identity.avatar" :alt="identity.username">
          </span>
            <transition name="slide-fade">
              <div class="expand" v-if='infopanel'>
                <!--<svg width="260" height="30">
                <polygon :points="points"></polygon>
              </svg>
              <svg width="260px" height="160px">
                <path d="M10 10 C 20 20, 40 20, 50 10" stroke="3" fill="blue"/>
                <path d="M180 100 C 180 130, 230 130, 230 100" stroke="3" fill="black"/>
                <path d="M180 0 S 180 30, 230 0" stroke="3" fill="green"/>
              </svg>-->
                <ul class='nav nav-pills nav-stacked'>
                  <router-link to='/add' active-class='active' tag='li'><a>添加项目</a></router-link>
                  <router-link to='/user/release' active-class='active' tag='li'><a>我发布的项目</a></router-link>
                  <router-link to='/user/develop' active-class='active' tag='li'><a>我开发的项目</a></router-link>
                  <router-link to='/user/profile' active-class='active' tag='li'><a>个人资料</a></router-link>
                </ul>
              </div>
            </transition>
          </div>
        </li>
        <li>
          <router-link to='/user/login' v-if='!authed' class='primary'><span class="badge">登入</span></router-link>
          <a v-if='authed' @click.prevent='logout'><span>登出</span></a>
        </li>
        <slot name="nav"></slot>
      </ul>
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<style>
  /*Header.vue*/

  .navbar ul.navbar-right {
    float: right;
  }

  .navbar li.rich {
    min-width: 4em;
    position: relative;
  }

  .navbar div.detail {
    position: absolute;
    top:0;
    left: -4em
  }

  .navbar-nav li .avatar {
    position: absolute;
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .4);
    background: #fff;
    cursor: pointer;
    z-index: 9
  }

  .navbar-nav li .avatar img {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /* box-shadow: inset 0 4px 4px 4px #000, 0 2px 4px -1px rgba(0,0,0,.3), 0 -1px 1px 0px rgba(0,0,0,.3)*/
  }

  .navbar li .expand {
    border-top: 4px solid sienna;
    position: absolute;
    width: 260px;
    min-height: 100px;
    height: auto;
    border-radius: 10px;
    /* background: #fff; */
    background: radial-gradient(32px circle at 205px 64px, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1));
    box-shadow: 0 3px 14px -4px rgba(0, 0, 0, .9);
    top: 58px;
    right: -80px;
    z-index: 8;
    overflow: hidden;
    background-position: 0 -64px;
  }

  .expand svg {
    display: block;
  }

  .expand polygon {
    fill: #41B883;
    box-shadow: 0 0 3px 0 #000
  }

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
</style>
<script>
  import * as api from '../../api/request.js'
  export default {
    name: 'header',
    data() {
      // var defaultSides = 10
      // var h = 12 // 默认吞掉的高度
      // var stats = Array.apply(null,{length: defaultSides}).map(() => 100)
      return {
        sitename: 'Coding-Show',
        // h,
        // stats,
        // points: generateDatas(stats,h),
        infopanel: false
      }
    },
    watch: {
      /*    h (a, b) {
            // 当吞掉的高度变化的时候，形成关键帧动画
            console.log('h changed')
            let i = 0
            let curr = b
            let end = a
            let delta = a > b ? 1 : -1
            let timer = null
            let _this = this
      ;      (function change(){
              if (timer) {clearTimeout(timer); timer = null}
              curr += delta
              _this.points = generateDatas(_this.stats, curr)
              if(curr*delta < a){
                timer = setTimeout(change,35)
              }
            })()
          }
      */
    },
    computed: {
      authed() {
        return this.$store.state.authed
      },
      identity() {
        if (!this.authed) { return { username: '', avatar: '' } }
        let username = this.$store.state.identity.username
        let defaultA = '/static/assets/figure_blank.png'
        let avatar = this.$store.state.identity.avatar
        avatar = avatar === '' ? defaultA : avatar
        return { username, avatar }
      }
    },
    methods: {
      logout() {
        api.logOut((x) => {
          if (x.status === 0) {
            this.$store.dispatch('setAuthed', false)
            this.$store.dispatch('setIdentity', { username: '' })
            this.$router.push({ path: '/home' })
          } else {
            console.log('登出失败')
          }
        })
      },
      toggleInfo() {
        this.infopanel = !this.infopanel
        this.h = this.h === 1 ? 12 : 1
      }
    }
  }
/*
function pointValue (start, range, index, total, r, h) {
  // 10个点，两端是端点，分成了9部分，所以有total - 1
  // 加入 start 是旋转的弧度
  var angel = start + range / (total - 1) * index
  var cos = Math.cos(angel)
  var sin = Math.sin(angel)
  var x = - r * cos + 206
  var y = r * sin - r + h
  return {x, y}
}
function generateDatas (stats, h=12) {
  let total = stats.length
  if (total < 1) {return '0,0 100,100'}
  let width = 260
  let height = 100
  let r = 40
  let angelRange = 2 * Math.acos((r-h)/r)
  let angelStart = Math.asin((r-h)/r)
  let xy = stats.map((stat, index) => {
    var v = pointValue(angelStart, angelRange, index, total, r, h)
    return v.x + ',' + v.y
  }).join(' ')
  return `0,0 ${xy} 260,1 260,20 0,30`
}
*/

</script>

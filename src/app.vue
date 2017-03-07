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
  data () {
    return{
      nextNum: 1,
      tips: []
    }
  },
  methods:{
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
.fr{float: right}
#wrapper{background: rgb(244,244,244)}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  transition: all .35s;
  width: 100%;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  position: absolute;
  transform: translate(-30px, 0);
}
</style>

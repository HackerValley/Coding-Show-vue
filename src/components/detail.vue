<template>
  <div>
    <div class="row">
      <h2>{{ content.project_name }} <span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="panel panel-default">
          <div class="panel-body">
            <p class="lead">
              项目概要：{{ content.description }}
              <router-link v-if='fromMine' :to="'/modi/' + content._id" class='btn btn-primary pull-right'>修改项目</router-link>
            </p>
            <p>
              项目要求：{{ content.detail }}
            </p>
            <p>
              图片展示：
            </p>
            <div class="imgpool">
              <img v-for='img in content.imagePath' :src="img">
            </div>
            <p>
              视频介绍：{{ content.project_link }}
            </p>
            <p v-if='false'>
              开发文档：【NONE】
            </p>
            <hr>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <h3 class="panel-title">项目概况</h3>
            <br>
            <p>星星数目 {{ content.star_count }}</p>
            <button type='button' class="btn btn-default" @click.prevent='likes' :disabled="'likes' | checkdisable(disables)"><span class="glyphicon glyphicon-thumbs-up"></span> 点赞</button>
          </div>
        </div>
        <div class="panel panel-default partake">
          <div class="panel-heading">
            <h3 class="panel-title">参与开发</h3>
          </div>
          <div class="panel-body">
            <span>
              <input type="radio" name="partake" id="frontend" value="1" v-model='partake'>
              <label for="frontend">前端</label>
            </span><span>
              <input type="radio" name="partake" id="backend" value="2" v-model='partake'>
              <label for="backend">后端</label>
            </span><span>
              <input type="radio" name="partake" id="android" value="3" v-model='partake'>
              <label for="android">安卓</label>
            </span><span>
              <input type="radio" name="partake" id="ios" value="4" v-model='partake'>
              <label for="ios">iOS</label>
            </span>
            <a class="btn btn-default" :class="{disabled: (!partake || !$store.state.authed)}" @click.prevent='join'><span class="glyphicon glyphicon-link"></span> 参与</a> <span v-if='partake && !$store.state.authed' class="text-muted small">未登录</span>
          </div>
        </div>
        <div class="panel panel-default" v-show='false'>
          <div class="panel-heading">
            <h3 class="panel-title">已经开发完成的作品</h3>
          </div>
          <div class="panel-body">
            <ul class="works">
              <li v-for='item in works'>
                <span class="url"><a :href="item.url">{{ item.url }}</a></span>
                <br>
                <span class="following"><i class="glyphicon glyphicon-eye-open"></i> {{ item.following }}</span>
                <span class="stars"><i class="glyphicon glyphicon-star"></i> {{ item.stars }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="panel panel-default">
          <div class="panel-body">
            <comment></comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Comment from './common/comment'
  import * as api from '../api/request.js'
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'detail-page',
    data() {
      return {
        content: {},
        status: null,
        msg: null,
        partake: null, // 参与开发
        partaking: false, // 参与开发按钮
        disables: [],
        works: [{
          name: '作品1',
          url: 'http://...github.com...',
          following: 1020,
          stars: 2040,
        }, {
          name: '作品2',
          url: 'http://...github.com...',
          following: 21020,
          stars: 12040,
        }],
        fromMine: false
      }
    },
    beforeRouteEnter(to, from, next) {
      let fromMine = from.fullPath.indexOf('/user/release') !== -1
      api.getProjDetail(to.params.id, (err, x) => {
        if (err) {
          // display some global error message
          next(false)
        } else {
          if (x.data.length < 1) {
            next(false)
            return
          }
          next(vm => {
            // 按照_id获取，只获取第一个。
            vm.fromMine = fromMine
            vm.content = x.data[0]
            vm.status = x.status
            vm.msg = x.msg
          })
        }
      })
    },
    methods: {
      ...mapActions([
        'newToast'
      ]),
      likes() {
        // 点赞按钮禁用
        this.disables.push('likes')
        console.log('点赞 + ')
        if (!this.content._id) {
          return
        }
        // console.log(this.content._id)
        let pid = this.content._id
        api.thumbup({
          pid
        }, (err, x) => {
          if (err) {
            console.error('api catch', err)
            this.newToast({
              type: 'danger',
              message: '未登录'
            })
          } else {
            console.log('success', x)
            this.newToast({
              type: 'success',
              message: '已赞！'
            })
            this.content.star_count += 1
          }
          // 1200ms 后点赞按钮启用
          setTimeout(() => {
            this.disables.splice(this.disables.indexOf('likes'), 1)
          }, 1200)
        })
      },
      join() {
        if(!this.$store.state.authed){
          return this.newToast({
            type:'danger',
            message: '请先登录'
          })
        }
        let postdata = {
          pid: this.$route.params.id,
          develop_skills : this.partake
        }
        console.log(postdata)
        api.join(postdata, (err,x)=>{
          if(err){
            return console.error(err)
          } else {
            console.log(x)
            if (typeof x === 'string' && x[0] === '<') {
              this.newToast({
                type:'warning',
                message:'未登录'
              })
            } else if(x.status === 0){
              this.newToast({
                type:'success',
                message:'已参与'
              })
            }else{
              this.newToast({
                type:'info',
                message: x.msg
              })
            }
          }
        })
        console.log('参与 + ')
      }
    },
    filters: {
      checkdisable(target, pool) {
        if (pool.indexOf(target))
          return null
        else
          return 1
      }
    },
    components: {
      Comment
    }
  }

</script>
<style scoped>
  .partake .panel-body span {
    display: inline-block;
    padding-right: .6em;
  }

  .partake .panel-body span label::before {
    content: '参与'
  }

  ul.works,
  ul.works li {
    list-style: none;
    margin: 0;
    padding: 0
  }

  ul.works li {
    display: block;
    border-bottom: 1px solid #eee;
    padding: .3em .6em;
  }

  .imgpool img {
    max-width: 320px;
  }

  @media screen and ( max-width:576px) {
    .imgpool img {
      max-width: 100%;
    }
  }

</style>

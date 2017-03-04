<template>
  <div>
    <div class="row">
      <h2>{{ content.project_name }} <span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="panel panel-info">
          <div class="panel-body">
            <p class="lead">
              项目概要：{{ content.description }}  <router-link :to="'/modi/' + content._id" class='btn btn-primary'>修改项目</router-link>
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
            <p>
              开发文档：【NONE】
            </p>
            <hr>
          </div>
          <comment></comment>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="panel panel-info">
          <div class="panel-body">
            <h3 class="panel-title">项目概况</h3>
            <br>
            <p>星星数目 {{ content.star_count }}</p>
            <a class="btn btn-default" @click.prevent='likes'><span class="glyphicon glyphicon-thumbs-up"></span> 点赞</a>
          </div>
        </div>
        <div class="panel panel-info partake">
          <div class="panel-heading">
            <h3 class="panel-title">参与开发</h3>
          </div>
          <div class="panel-body">
            <span>
              <input type="radio" name="partake" id="frontend" value="frontend" v-model='partake'>
              <label for="frontend">前端</label>
            </span><span>
              <input type="radio" name="partake" id="backend" value="backend" v-model='partake'>
              <label for="backend">后端</label>
            </span><span>
              <input type="radio" name="partake" id="android" value="android" v-model='partake'>
              <label for="android">安卓</label>
            </span><span>
              <input type="radio" name="partake" id="ios" value="ios" v-model='partake'>
              <label for="ios">iOS</label>
            </span>
            <a class="btn btn-default" :class="{disabled: !partake}" @click.prevent='partake'><span class="glyphicon glyphicon-link"></span> 参与</a>
          </div>
        </div>
        <div class="panel panel-success">
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
    </div>
  </div>
</template>
<script>
  import Comment from './common/comment'
  import * as api from '../api/request.js'
  export default {
    name: 'detail-page',
    data() {
      return {
        content: {},
        status: null,
        msg: null,
        partake: null,  // 参与开发
        works:[
          {
            name: '作品1',
            url: 'http://...github.com...',
            following: 1020,
            stars: 2040,
          },{
            name: '作品2',
            url: 'http://...github.com...',
            following: 21020,
            stars: 12040,
          }
        ]
      }
    },
    beforeRouteEnter(to, from, next) {
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
            vm.content = x.data[0]
            vm.status = x.status
            vm.msg = x.msg
          })
        }
      })
    },
    methods: {
      likes() {
        console.log('点赞 + ')
        if(!this.content._id){
          return
        }
        console.log(this.content._id)
        let pid = this.content._id
        api.thumbup({pid},(x)=>{
          console.log(x)
          this.content.star_count += 1
        })
      },
      partake() {
        console.log('参与 + ')
      }
    },
    components: {
      Comment
    }
  }

</script>
<style>
  .partake .panel-body span {display: inline-block;padding-right: .6em;}
  .partake .panel-body span label::before {
    content: '参与'
  }
  ul.works, ul.works li { list-style: none;margin:0;padding:0}
  ul.works li {display: block;border-bottom: 1px solid #eee;padding:.3em  .6em;}
  .imgpool img{max-width:320px;}
</style>

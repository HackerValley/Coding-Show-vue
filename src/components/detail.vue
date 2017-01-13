<template>
  <div>
    <div class="row">
      <h2>{{ content.project_name }} <span class="fr"><small><router-link to="/">返回首页</router-link></small></span></h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <div class="panel panel-primary">
          <div class="panel-body">
            <p class="lead">
              项目概要：{{ content.description }}
            </p>
            <p>
              项目要求：{{ content.detail }}
            </p>
            <p>
              原型展示：{{ content.imagePath }}
            </p>
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
          <div class="panel-heading">
            <h3 class="panel-title">项目概况</h3>
          </div>
          <div class="panel-body">
            <p>星星数目 {{ content.star_count }}</p>
          </div>
        </div>
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title">参与开发</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">已经开发完成的作品</h3>
          </div>
          <div class="panel-body">
            Panel content
          </div>
        </div>
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title">Panel title</h3>
          </div>
          <div class="panel-body">
            Panel content
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
      msg: null
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

  },
  components: {
    Comment
  }
}
</script>
<style>
</style>
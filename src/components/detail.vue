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
          <div class="panel-body">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="comment" class="col-sm-2 control-label">留言板</label>
                <div class="col-sm-10">
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-info">回复</button>
                </div>
              </div>
            </form>
            <div class="comments">
              <div class="comment" v-for="(v, i) in tmp">
                <div class="figure"><img data-src="holder.js/100%x180" alt="..."></div>
                <div>
                  <span class="nick">user {{ i }}</span>
                  <span class="time">· {{ 10 - i }} minutes ago</span>
                  <div class="content">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
                </div>
              </div>
            </div>
          </div>
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
import * as api from '../api/request.js'
export default {
  name: 'detail-page',
  data() {
    return {
      content: {},
      status: null,
      msg: null,
      tmp: Array.apply(null,{length: 6})
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

  }
}
</script>

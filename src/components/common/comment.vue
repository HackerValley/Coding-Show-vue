<template>
  <div class="panel-body">
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-info" @click='fetch'>获取Comments</button>
        </div>
      </div>
      <div class="form-group">
        <label for="comment" class="col-sm-2 control-label">留言板</label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="3" v-model='commentdata'></textarea>
          <p class="text-muted"> {{ $route.params.id }}</p>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-info" @click='addComment'>回复</button>
        </div>
      </div>
      <div class="panel panel-info">
        {{ wrap }}
      </div>
    </form>
    <div class="comments">
      <div class="comment" v-for="(v, i) in tmp">
        <div class="figure"><img data-src="holder.js/100%x180" alt="..." src="/static/assets/figure_blank_2.png"></div>
        <div class="context">
          <span class="nick"><b>user {{ i }}</b></span>
          <span class="time text-muted">· {{ 10 - i }} minutes ago</span>
          <div class="content">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh udapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh udapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '../../api/request.js'
import { mapActions } from 'vuex'

export default {
  name: 'Comments',
  data () {
    return {
      list: [],
      tmp: Array.apply(null, {
        length: 6
      }),
      wrap: {},
      commentdata:''
    }
  },
  beforeMount () {
    this.fetch()
  },
  methods: {
    fetch () {
      // console.log(this.$route.params.id)
      api.getProjComments(this.$route.params.id, (err, x) => {
        // console.log(x)
        if (err) {
          // display some global error message
          
        } else {
          this.wrap = x
        }
      })
    },
    addComment () {
      let comment = this.commentdata
      if (comment.length < 5) {
        this.newToast({
          type: 'danger',
          message: '评论内容太少'
        })
        return
      }
      api.addComments({comment},(err, x)=>{
        if (err) {
          // display some global error message
          this.newToast({
            type: 'danger',
            message: err
          })
        } else {
          if (x[0] === '<') {
            this.newToast({
              type: 'danger',
              message: x
            })
          }
          // console.log(x)
        }
      })
    },
    ...mapActions([
      'newToast',
      'getPage'
    ])
  }
}
</script>
<style>
.comments {
  padding-top: 2em;
}

.comment {
  min-height: 80px;
  overflow: hidden;
  line-height: 2em;
  padding-bottom: 2em;
}

.comment .figure {
  float: left;
  height: 100%;
  margin: 10px;
}

.comment .figure img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.comment .context {
  padding-left: 80px;
}

.comment .context span {
  display: inline-block;
}

.comment .context .nick {}

.comment .context .content {
  line-height: 1.4em;
}
</style>

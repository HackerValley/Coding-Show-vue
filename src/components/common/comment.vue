<template>
  <div class="panel-body">
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="comment" class="col-sm-2 control-label">留言板</label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="3" v-model='commentdata'></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-info" @click='addComment'>回复</button>
        </div>
      </div>
    </form>
    <div class="comments">
      <div class="comment" v-for="(v, i) in comments">
        <div class="figure">
          <router-link :to='"/user/profile/" + v.user._id'><img data-src="holder.js/100%x180" alt="..." src="/static/assets/figure_blank_2.png"></router-link>
        </div>
        <div class="context">
          <span class="nick"><b><router-link :to='"/user/profile/" + v.user._id'>{{ v.user.nickname || v.user._id }}</router-link></b></span>
          <span class="time text-muted">· {{ v.time | showTime }} </span>
          <div class="content">{{ v.comment_msg }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as api from '../../api/request.js'
  import {
    mapActions
  } from 'vuex'

  export default {
    name: 'Comments',
    data() {
      return {
        list: [],
        tmp: Array.apply(null, {
          length: 6
        }),
        wrap: {},
        comments: [],
        commentdata: ''
      }
    },
    beforeMount() {
      this.fetch()
    },
    methods: {
      fetch() {
        // console.log(this.$route.params.id)
        api.getProjComments(this.$route.params.id, (err, x) => {
          // console.log(x)
          if (err) {
            // display some global error message

          } else {
            this.comments.push(...x.data)
          }
        })
      },
      addComment() {
        let comment_msg = this.commentdata
        let p_id = this.$route.params.id
        if (comment_msg.length < 4) {
          this.newToast({
            type: 'danger',
            message: '评论内容太少'
          })
          return
        }
        api.addComments({
          comment_msg,
          p_id
        }, (err, x) => {
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
            console.log(x)
            this.commentdata = ''
            this.comments.unshift(x.date)
          }
        })
      },
      ...mapActions([
        'newToast',
        'setPage'
      ])
    },
    filters: {
      showTime: function (value) {
        if (!value) return ''
        return new Date(value).toLocaleString()
      }
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

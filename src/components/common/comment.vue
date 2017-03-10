<template>
  <div class="panel-body">
    <form class="form-horizontal" role="form" v-if='$store.state.authed'>
      <div class="form-group">
        <label for="comment" class="col-sm-2 control-label">留言</label>
        <div class="col-sm-10">
          <textarea class="form-control" rows="3" v-model='commentdata'></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="btn-group pull-right" role="group" >
          <router-link alt='当前用户' :to="'/user/profile/' + $store.state.identity._id" class="btn btn-text">{{ this.$store.state.identity.nickname || this.$store.state.identity.username }}</router-link>
          <button type="button" class="btn btn-info" @click='addComment' :disabled='commenting'>回复</button>
        </div>
          <u></u> &nbsp;
        </div>
      </div>
    </form>
    <div class="alert alert-info" role="alert" v-if='!$store.state.authed'>
      <router-link to='/user/login' class='btn btn-text'>登入</router-link> 以评论
    </div>
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
        wrap: {},
        comments: [],
        commentdata: '',
        commenting: null
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
        this.commenting = 1
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
                message: '尚未登录'
              })
              this.commenting = null
              return
            } else {
              // console.log(x)
              this.commentdata = ''
              this.comments.unshift(x.date)
              this.commenting = null
            }
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

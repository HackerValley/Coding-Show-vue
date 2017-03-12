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
          <div class="btn-group pull-right" role="group">
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
      <transition-group name='b-complete'>
        <div class="comment b-complete-item" v-for="(v, i) in comments" :key='v._id' :id='v._id'>
          <div class="figure"><img data-src="holder.js/100%x180" alt="..." src="/static/assets/figure_blank_2.png">
          </div>
          <div class="context">
            <span class="nick"><b><router-link :to='"/user/profile/" + v.user._id'>{{ v.user.nickname || v.user._id }}</router-link></b></span>
            <span class="time text-muted">· {{ v.time | showTime }} </span>
            <div class="content">{{ v.comment_msg }}</div>
          </div>
        </div>
      </transition-group>
      <button :disabled='loading' class="btn btn-block btn-info" @click.prevent='loadmore' v-if='page_num < page_total'>加载更多</button>
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
        commenting: null,
        loading:null,
        page_num: 1,
        page_total: 1,
        page_size: 7,
        record_total: 1,
      }
    },
    beforeMount() {
      this.init()
    },
    methods: {
      init() {
        // console.log(this.$route.params.id)
        this.fetch({}, (result) => {
          if (result) {
            this.comments.push(...result.list)
          }
        })
      },
      fetch({
        id,
        page_num,
        page_size
      }, cb, errcb) {
        id = id || this.$route.params.id
        page_num = page_num || 1
        page_size = page_size || this.page_size
        errcb = errcb || function (err){console.info(err)}
        api.getProjComments({
          id,
          page_num,
          page_size
        }, (err, x) => {
          if (err) {
            // console.error('错误', err)
            errcb(err)
            return null
          } else {
            this.page_num = x.data.page_num
            this.page_total = x.data.page_total
            cb(x.data)
          }
        })
      },
      loadmore() {
        let target_page_num = this.page_num + 1
        this.loading = 'loading'
        this.fetch({
          page_num: target_page_num
        }, (result) => {
          if (result) {
            this.comments.push(...result.list)
            this.loading = null
          }
        }, (err)=>{
          console.error('err:',err)
          this.loading = null
        })
      },
      addComment() {
        if(!this.$store.state.authed){
          return this.newToast({
            type:'danger',
            message: '请先登录'
          })
        }
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
              this.comments.pop()
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
  .b-complete-item{
    transition: all .3s;
  }
  .b-complete-enter, .b-complete-leave-active {
    opacity: 0;
    transform: translateX(30px);
  }
  .b-complete-leave-active {
    position: absolute;width: 100%;
  }
</style>

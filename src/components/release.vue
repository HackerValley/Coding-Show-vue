<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
    <div class="row">
      <h2>我发布的项目</h2>
      <hr>
    </div>
    <div class="row">
      <h1 v-if='msg === "没有项目"' style="text-align:center">没有项目</h1>
      <div class="col-xs-6 col-sm-6 col-md-3" v-for='item in list'>
        <div class="thumbnail item">
          <a href=""><img data-src="holder.js/300x300" /></a>
          <div class="caption">
            <h4><a href="#">{{ item.project_name }}</a></h4>
            <div class="intro">
              <p>{{ username }} 于 <time>{{ item.create_time }}</time> 创建</p>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-3 col-md-3">
                <a href="#"><span class="glyphicon glyphicon-comment"></span></a>
                <span>{{ item.star_count }}</span>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <a href="#"><span class="glyphicon glyphicon-wrench"></span></a>
                <span>{{ item.star_count }}</span>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <a href="#"><span class="glyphicon glyphicon-eye-open"></span></a>
                <span>{{ item.star_count }}</span>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <a href="#"><span class="glyphicon glyphicon-thumbs-up"></span></a>
                <span>{{ item.star_count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '../api/request'
import { mapActions } from 'vuex'
export default {
  created () {
    this.getRelease()
  },
  data () {
    return {
      msg: '',
      status: -1,
      list:[],
      page_num:-1,
      page_size:-1,
      page_total:-1,
      project_total:-1,
    }
  },
  computed: {
    username () {
      return this.$store.state.identity.username
    },
    page_nums: function () {
      let arr = [];
      for (var i = 0;i<5; i++){
        arr[i] = this.page_num -2 + i
      }
      console.log(arr)
      return arr.filter((val)=>{
        return (val>0 && val<=this.page_total)
      })
    }
  },
  methods: {
    ...mapActions([
      'newToast', 'getPage'
    ]),
    getRelease () {
      api.getProjRelease((x)=>{
        this.msg = x.msg
        if(x.status === 0){
          this.msg = '已' + x.msg
          this.list = x.data.list
          this.getPage({
            page_num: x.data.page_num,
            page_size: x.data.page_size,
            page_total: x.data.page_total,
            project_total: x.data.project_total
          })
        } else {
          this.getPage()
        }
        this.newToast({
          type: 'info',
          message: this.msg
        })
      })
    }
  }
}
  
</script>
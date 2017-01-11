<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
    <div class="row">
      <h2>我开发的项目</h2>
      <hr>
    </div>
    <div class="row">
      <div v-for='item in list' class="col-xs-6 col-sm-6 col-md-3">
        <router-link to='/detail/6789' tag='div' class="thumbnail item">
          <a href=""><img data-src="holder.js/300x300"></a>
          <div class="caption">
            <h4><a href="#">{{ item.project_name }}</a></h4>
            <div class="intro">
              <p>{{ username }} 于 <time>{{ item.create_time }}</time> 创建</p>
            </div>
            <div class="row">
              <div class="col-xs-12 text-right">
                <a href="#"><span class="glyphicon glyphicon-thumbs-up"></span></a>
                <span>{{ item.star_count }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import * as api from '../api/request'
import { mapActions } from 'vuex'
export default {
  created () {
    this.getDev()
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
    getDev () {
      api.getProjDev((x)=>{
        let pagedata = null
        this.msg = x.msg
        if(x.status === 0){
          this.msg = '已' + x.msg
          this.list = x.data.list
          pagedata = ({
            page_num: x.data.page_num,
            page_size: x.data.page_size,
            page_total: x.data.page_total,
            project_total: x.data.project_total
          })
        }
        this.getPage(pagedata)
        this.newToast({
          type: 'info',
          message: this.msg
        })
      })
    }
  }
}
  
</script>
<style type="text/css">
  .item {
    overflow: hidden;
    box-sizing: border-box;
    background: rgba(0, 0, 0, .05);
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .3);
    border-radius: 4px;
  }
  
  .item img {
    display: block;
    width: 100%;
    margin: 0 auto;
    min-height: 150px;
    background-color: aqua;
  }
  
  .item .intro {
    position: relative;
    font-size: 14px;
  }
  
  .item h4 {
    font-size: 19px;
  }
  
  .item h4 a {
    text-decoration: none;
    color: #000000;
  }
  
  .item h4 a:hover {
    color: darkcyan;
  }
  </style>
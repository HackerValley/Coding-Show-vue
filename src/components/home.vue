<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
    <div class="row">
      <h2>开源项目</h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-3" v-for='item in list'>
        <div class="thumbnail item">
          <a href=""><img data-src="holder.js/300x300" /></a>
          <div class="caption">
            <h4><a href="#">{{ item.project_name }}</a></h4>
            <div class="intro">
              <p>用户【{{ item.uid }}】 <br>于 {{ item.create_time }} 创建</p>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-3 col-md-3">
                <a href="#"><span class="glyphicon glyphicon-thumbs-up"></span></a>
                <span>{{ item.star_count }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <hr>
      <nav class="text-center">
        <ul class="pagination pagination-lg">
          <li class="previous" :class="{disabled: page_nums[0] === 1}"><a href="#">← </a></li>
          <li v-for='page in page_nums'><a href="#">{{ page }}</a></li>
          <li class="next" :class="{disabled: page_nums[page_nums.length - 1] === page_total}"><a href="#">→</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  import * as api from '../api/request'

  export default {
    created () {
      this.getHome()
    },
    data () {
      return {
        list:[],
        page_num:-1,
        page_size:-1,
        page_total:-1,
        project_total:-1,
      }
    },
    computed: {
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
      getHome () {
        api.getProjIndex((x)=>{
          if(x.status === 0){
            this.msg = x.msg
            this.list = x.data.list
            this.page_num = x.data.page_num
            this.page_size = x.data.page_size
            this.page_total = x.data.page_total
            this.project_total = x.data.project_total
          }
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
<template>
  <div class="col-xs-12 col-sm-10 col-sm-offset-1">
    <div class="row">
      <h2>我开发的项目</h2>
      <hr>
    </div>
    <div class="row">
      <div v-for='item in data' class="col-xs-6 col-sm-6 col-md-3">
        <router-link to='/detail/6789' tag='div' class="thumbnail item">
          <a href=""><img data-src="holder.js/300x300"></a>
          <div class="caption">
            <h4><a href="#">{{ item.project_name }}</a></h4>
            <div class="intro">
              <p>{{ item.pid }} 于 <time>{{ item.create_time }}</time> 创建</p>
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
    <div class="row">
      <hr>
      <nav class="text-center">
        <ul class="pagination pagination-lg">
          <li class="previous disabled"><a href="#">← </a></li>
          <li><a href="#">{{ this.page_num - 2}}</a></li>
          <li><a href="#">{{ this.page_num - 1}}</a></li>
          <li><a href="#">{{ this.page_num }}</a></li>
          <li><a href="#">{{ this.page_num + 1}}</a></li>
          <li><a href="#">{{ this.page_num + 2}}</a></li>
          <li class="next"><a href="#">→</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import * as api from '../api/request'

export default {
  beforeMount () {
    api.getProjDevelopment((x) => {
      this.data = x.data.concat(x.data).concat(x.data)
      this.msg = x.msg
      this.status = x.status
      this.page_total = x.page_total
      this.page_size = x.page_size
      this.page_num = x.page_num
      this.projects_total = x.projects_total
    })
  },
  data () {
    return {
      data: {},
      msg: '',
      status: -1,
      page_total: 0,
      page_size: 0,
      page_num: 0,
      projects_total: 0
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
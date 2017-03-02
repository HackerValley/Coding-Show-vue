<template>
  <div>
    <div class="row">
      <h2>开源项目</h2>
      <hr>
    </div>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-3" v-for='item in list'>
        <project-item :itemdata='item'></project-item>
      </div>
    </div>
  </div>
</template>
<script>
  import * as api from '../api/request'
  import { mapActions } from 'vuex'
  import ProjectItem from './common/project-item'

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
      },
      ...mapActions([
          'newToast',
          'getPage'
        ])
    },
    components: {
      ProjectItem
    }
  }
</script>
<style type="text/css">

</style>

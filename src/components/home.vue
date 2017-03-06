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
    beforeRouteEnter(to, from, next) {
      let page_num = to.params.page || 1
      let page_size = to.params.size || 10
      next(vm=>{
        console.log('设置页码')
        vm.getHome(page_num)
      })
    },
    beforeRouteUpdate(to, from, next) {
      if(this){
        console.log(this.page_num)
        console.log('get')
        this.getHome(to.params.page)
      }
      next()
    },
    data () {
      return {
        list: [],
      }
    },
    computed: {

    },
    methods: {
      getHome (page_num) {
        page_num = page_num || 1
        api.getProjIndex({page_num},(err,x)=>{
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
          this.setPage(pagedata)
          this.newToast({
            type: 'info',
            message: this.msg
          })
        })
      },
      ...mapActions([
          'newToast',
          'setPage'
        ])
    },
    components: {
      ProjectItem
    }
  }
</script>
<style type="text/css">

</style>

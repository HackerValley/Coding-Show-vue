<template>
  <div>
    <div class="row">
      <h2>我发布的项目</h2>
      <hr>
    </div>
    <div class="row">
        <h1 v-if='!list.length' style="text-align:center">
          没有项目
          <small><router-link to="/add">添加一个</router-link></small>
        </h1>
      <div class="col-xs-6 col-sm-6 col-md-3" v-for='item in list'>
        <project-item :itemdata='item'></project-item>
      </div>
    </div>
  </div>
</template>
<script>
  import * as api from '../api/request'
  import {
    mapActions
  } from 'vuex'
  import ProjectItem from './common/project-item'

  export default {
    beforeRouteEnter(to, from, next) {
      let page_num = to.params.page || 1
      let page_size = to.params.size || 10
      next(vm => {
        console.log('设置页码')
        vm.getRelease(page_num)
      })
    },
    beforeRouteUpdate(to, from, next) {
      if (this) {
        console.log('page', this.page_num)
        this.getRelease(to.params.page)
      }
      next()
    },
    data() {
      return {
        msg: '',
        status: -1,
        list: []
      }
    },
    computed: {
      username() {
        return this.$store.state.identity.username
      }
    },
    methods: {
      ...mapActions([
        'newToast', 'setPage'
      ]),
      getRelease(page_num) {
        page_num = page_num || 1
        // console.log(this.$route.params.page || 1)
        api.getProjRelease({
          page_num
        }, (err, x) => {
          let pagedata = null
          this.msg = x.msg
          if (x.status === 0) {
            this.msg = '已获取列表'
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
      }
    },
    components: {
      ProjectItem
    }
  }

</script>

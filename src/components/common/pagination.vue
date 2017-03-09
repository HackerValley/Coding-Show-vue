<template>
  <nav class="text-center" v-if='display'>
    <ul class="pagination pagination-lg">
      <li class="previous">
        <router-link :to='basePath + "/" +(page_num - 1)' tag='button' class='btn btn-default' :disabled="pagination.prev<1?1:null">← </router-link>
      </li>
      <li v-for='page in pagination.available'>
        <router-link :to='basePath + "/" +page' tag='button' class='btn btn-default'>{{ page }}</router-link>
      </li>
      <li class="next">
        <router-link :to='basePath + "/" +(++page_num)' tag='button' class='btn btn-default' :disabled="pagination.next>pagination.available.length ? 1:null"> →</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// 使用vue-router的方法获取页面base path
  export default {
    name: 'pagination',
    created () {
      // console.log(this.$route)
    },
    data () {
      return {
        href_base: '',
        test: this.$root.$route.fullPath
      }
    },
    computed: {
      ...mapGetters(['pagination']),
      display () {
        // 按需显示
        let m = this.$route.matched
        m = m.length > 0 ? m[0].path : '/'
        let listpage= [
          '/home',
          '/user/release',
          '/user/develop'
        ]
        return listpage.indexOf(m) !== -1
      },
      basePath () {
        return this.$route.matched[0].path
      },
      page_num () {
        let pagenum = this.$route.params.page
        if(!pagenum || pagenum < 0 ){
          pagenum = 1
        }
        return pagenum
      }
    }
  }
</script>

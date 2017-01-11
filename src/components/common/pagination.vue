<template>
  <nav class="text-center" v-if='display'>
    <ul class="pagination pagination-lg">
      <li class="previous" :class="{disabled: !pagination.prev}">
        <router-link :to='basePath'>← </router-link>
      </li>
      <li v-for='page in pagination.available'>
        <router-link :to='basePath'>{{ page }}</router-link>
      </li>
      <li class="next" :class="{disabled: !pagination.next}">
        <router-link :to='basePath'> →</router-link>
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
        console.log(m)
        return listpage.indexOf(m) !== -1
      },
      basePath () {
        return this.$route.path
      }
    }
  }
</script>
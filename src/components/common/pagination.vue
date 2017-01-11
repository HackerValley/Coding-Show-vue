<template>
  <nav class="text-center" v-if='true || display'>
    <div class="well">
      1: {{ matchedPath }} 
    </div>
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
        let listpage= [
          '/home',
          '/user/release',
          '/user/develop'
        ]
        return listpage.indexOf(this.$route.path) !== -1
      },
      basePath () {
        // console.log('test')
        return this.$route.path
      },
      matchedPath () {
        console.log('加载一次')
        console.log(this.$route.matched.length)
        // console.log(this.$route.matched)
        // console.log(this.$route.matched[0])
        // console.log(this.$route.matched[0].path)
        return this.$route.matched.length // this.$route.matched[0].path
      }
    }
  }
</script>
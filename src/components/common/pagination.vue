<template>
  <nav class="text-center" v-if=''>
    {{ display }} <br>
    <ul class="pagination pagination-lg">
      <li class="previous" :class="{disabled: !pagination.prev}">
        <router-link to='/home'>← </router-link>
      </li>
      <li v-for='page in pagination.available'>
        <router-link to='/home'>{{ page }}</router-link>
      </li>
      <li class="next" :class="{disabled: !pagination.next}">
        <router-link to='/home'> →</router-link>
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
        console.log(this.$route.fullPath)
        console.log(this.$route.path)
        console.log(this.$route.matched)
        return 'a'
      },
      rrr () {
        // console.log('test')
        return this.$route.path
      }
    }
  }
</script>
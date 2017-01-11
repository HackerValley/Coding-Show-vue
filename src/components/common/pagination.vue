<template>
  <h1>分页</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// 使用vue-router的方法获取页面base path
  export default {
    name: 'pagination',
    data () {
      return {
        href_base: ''
      }
    },
    computed: mapGetters(['pagination'])
  }
</script>
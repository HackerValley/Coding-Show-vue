<template>
  <div class="footer">
    <div class="container-fluid">
      <p class="text-muted text-center">Power by <a href="https://github.com/HackerValley">HACKER VALLEY</a> @ 2016
        <span class="text-muted" v-if="$route.fullPath !== '/team'"> | </span>
        <span v-if="$route.fullPath !== '/team'" class="text-muted text-center"><router-link class='btn btn-text' to='/team'>贡献者名单</router-link></span></p>
      <p class="text-center"><a href="http://www.miitbeian.gov.cn/" class='btn btn-text'>京ICP备16065512号-2</a></p>
    </div>
  </div>
</template>
<script>


</script>

<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <slot name="nav-left"></slot>
      <slot name="nav"></slot>
    </div><!-- /.container-fluid -->
  </nav>
</template>
<style>
/*Header.vue*/
  .navbar ul{float:left;}
  .navbar ul li{float:left;}
  .navbar ul.navbar-right{float:right;}
</style>

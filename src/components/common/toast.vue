<template>
  <transition-group name='a-complete'>
    <div :class="'alert-' + toast.type" class="alert alert-dismissible a-complete-item" role="alert" :key='toast.id' v-for='(toast,idx) in allToasts'>
      <strong>.</strong> {{ toast.message }}.
    </div>
  </transition-group>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'toast',
  computed:{
    ...mapGetters(['allToasts'])
  }
}
</script>
<style>
/**/
.a-complete-item{
  transition: all .3s;
}
.a-complete-enter, .a-complete-leave-active {
  opacity: 0;
  transform: translateX(30px);
}
.a-complete-leave-active {
  position: absolute;width: 100%;
}
</style>
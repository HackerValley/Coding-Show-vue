<template>
  <transition-group name='a-complete'>
    <div :class="'alert-' + toast.type" class="alert alert-dismissible a-complete-item" role="alert" :key='toast.id' v-for='(toast,idx) in allToasts'>
      <strong>.</strong> {{ toast.message }}.
    </div>
  </transition-group>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'toast',
  data () {
    return {
      timers: [],
      lasting: 1600,
      poolSize: 4
    }
  },
  computed:{
    ...mapGetters(['allToasts', 'toastNum'])
  },
  methods: {
    ...mapActions(['shiftone', 'spliceTo'])
  },
  watch: {
    toastNum: function (a, b) {
      // console.log(`${a}`)
      if(a > b){
        for (let i = 0; i < a - b; i++) {
          const t = setTimeout(()=>{
            this.shiftone()
            this.timers.shift()
          }, this.lasting + 300 * i)
          this.timers.push(t)
        }
      }
    }
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
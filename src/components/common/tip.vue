<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <strong>{{ tiptype }}</strong> <slot></slot>.
  </div>
</template>
<script>
export default {
  name: 'tip',
  props: ['tiptype']
}
</script>
<script setup>
  defineProps({
    prefix: {
      type: String,
      default: "#icon-"
    },
    name: String,
    color: {
      type: String,
      default: 'red'
    },
    width:{
      type: String,
      default: '16px'
    },
    height:{
      type: String,
      default: '16px'
    }

  })
</script>

<template>
  <svg :style="{width, height}">
    <use :xlink:href="prefix + name"></use>
  </svg>

</template>

<style scoped>

</style>
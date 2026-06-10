<script setup>
import setting from '@/setting'

</script>

<template>
  <div class="logo">
    <img :src="setting.logo">
    <p style="margin-left: 50px;">{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
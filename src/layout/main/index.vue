<script setup>
import { useLayoutSettingStore } from '@/stores/module/setting'
import { watch, ref, nextTick } from 'vue'
const layoutSettingStore = useLayoutSettingStore()
let flag = ref(true)

watch(() => layoutSettingStore.refresh, () => {
  flag.value = false
  nextTick(() => {
    flag.value = true
  })
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all .5s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
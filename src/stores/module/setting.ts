import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLayoutSettingStore = defineStore('settingStore', () => {
  let fold = ref(false)
  let refresh = ref(false)
  return {
    fold, refresh
  }
})
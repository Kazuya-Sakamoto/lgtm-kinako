import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMaintenanceStore = defineStore(
  'maintenance',
  () => {
    const done = ref(false)
    const show = ref(false)

    const openDialog = () => {
      show.value = true
      // if (done.value) return
      // 計測の目処とかが立ったら、再度検討する
      // https://github.com/Kazuya-Sakamoto/lgtm-kinako/issues/25
      // show.value = true;
    }

    const closeDialog = () => {
      show.value = false
      done.value = true
    }

    return { done, show, openDialog, closeDialog }
  },
  {
    persist: true,
  }
)

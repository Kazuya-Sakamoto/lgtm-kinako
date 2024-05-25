import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMaintenanceStore = defineStore(
  'maintenance',
  () => {
    const show = ref(false)
    return {
      show,
      openDialog: () => {
        return (show.value = true)
      },
      closeDialog: () => {
        return (show.value = false)
      },
    }
  },
  {
    persist: true,
  }
)

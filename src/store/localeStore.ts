import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocaleStore = defineStore(
  'localeStore',
  () => {
    const locale = ref<string>('ja')

    const setLocale = (newLocale: string) => {
      locale.value = newLocale
    }

    return { locale, setLocale }
  },
  {
    persist: true,
  }
)

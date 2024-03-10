import { useRuntimeConfig } from 'nuxt/app'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { h } from '@/lib/headers'
import { LoginParams } from '@/hooks/types'

export const useLoginStore = defineStore(
  'login',
  () => {
    const config = useRuntimeConfig()
    const csrfToken = ref<string>('')
    const token = ref<string>('')

    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${config.public.API_URL}/csrf`, {
          method: 'GET',
          credentials: 'include',
        })
        if (!response.ok) return

        const data = await response.json()
        csrfToken.value = data.csrf_token
      } catch (error) {
        console.error(error)
        alert(`エラーが発生しました。${error}`)
      }
    }

    const onLoginStore = async ({ email, password }: LoginParams) => {
      await fetchCsrfToken()
      const params = { email, password }

      try {
        const response = await fetch(`${config.public.API_URL}/login`, {
          method: 'POST',
          headers: h(csrfToken.value),
          body: JSON.stringify({ ...params }),
          credentials: 'include',
        })
        if (!response.ok) return

        const data = await response.json()
        token.value = data
      } catch (error) {
        console.error(error)
        alert(`エラーが発生しました。${error}`)
      }
    }

    return {
      csrfToken,
      token,
      onLoginStore,
      isLogin: () => {
        return !!token.value
      },
      clearToken: () => {
        csrfToken.value = ''
        token.value = ''
      },
    }
  },
  {
    persist: true,
  }
)

import { useRuntimeConfig } from '@/.nuxt/imports'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { h } from '@/lib/headers'
import { LoginParams } from '@/hooks/types'

type CsrfResponse = {
  csrf_token: string
}
type LoginResponse = {
  token: string
}

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

        const data: CsrfResponse = await response.json()
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

        const data: LoginResponse = await response.json()
        token.value = data.token
      } catch (error) {
        console.error(error)
        alert(`エラーが発生しました。${error}`)
      }
    }

    const isLogin = () => {
      return !!token.value
    }

    return { csrfToken, token, onLoginStore, isLogin }
  },
  {
    persist: true,
  }
)

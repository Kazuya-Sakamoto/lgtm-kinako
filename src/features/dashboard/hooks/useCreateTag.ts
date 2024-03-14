import { reactive } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { h } from '@/lib/headers'
import { useErrorHandler } from '@/hooks/useErrorHandler'

type State = {
  input: {
    name: string
  }
  loading: boolean
}
const initialState = (): State => ({
  input: {
    name: '',
  },
  loading: false,
})

export const useCreateTag = () => {
  const config = useRuntimeConfig()
  const loginStore = useLoginStore()
  const { csrfToken } = storeToRefs(loginStore)
  const { handleUnauthorizedError } = useErrorHandler()

  const state = reactive<State>(initialState())

  const onInput = (item: { name: string; value: string }) => {
    state.input = {
      ...state.input,
      [item.name]: item.value,
    }
  }

  const createTag = async () => {
    const params = {
      ...state.input,
    }
    state.loading = true
    try {
      const response = await fetch(`${config.public.API_URL}/tags`, {
        method: 'POST',
        headers: h(csrfToken.value),
        body: JSON.stringify(params),
        credentials: 'include',
      })
      if (!response.ok) handleUnauthorizedError(response.status)

      return response.json()
    } catch (error) {
      console.error(error)
      alert(`エラーが発生しました。${error}`)
    } finally {
      state.loading = false
      state.input = initialState().input
    }
  }

  return {
    state,
    onInput,
    createTag,
  }
}

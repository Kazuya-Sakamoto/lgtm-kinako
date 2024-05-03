import { reactive } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { h } from '@/lib/headers'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import { CreateAlbumParams } from '@/hooks/types'

type State = {
  input: {
    image: string
    title: string
  }
  loading: boolean
}
const initialState = (): State => ({
  input: {
    image: '',
    title: '',
  },
  loading: false,
})

export const useCreateAlbum = () => {
  const config = useRuntimeConfig()
  const loginStore = useLoginStore()
  const { csrfToken } = storeToRefs(loginStore)
  const { handleUnauthorizedError } = useErrorHandler()
  const state = reactive<State>(initialState())

  const onInput = (item: { name: keyof CreateAlbumParams; value: string }) => {
    state.input = {
      ...state.input,
      [item.name]: item.value,
    }
  }
  const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const image = event.target?.result as string
        onInput({ name: 'image', value: image })
      }
      reader.readAsDataURL(file)
    }
  }

  const createAlbum = async () => {
    const params = {
      ...state.input,
    }

    state.loading = true
    try {
      const response = await fetch(`${config.public.API_URL}/albums`, {
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
    }
  }

  return {
    state,
    createAlbum,
    onInput,
    onFileChange,
  }
}

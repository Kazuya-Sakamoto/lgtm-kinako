import { reactive } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { Tag } from '@/hooks/types'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { h } from '@/lib/headers'
import { useErrorHandler } from '@/hooks/useErrorHandler'

type State = {
  loading: boolean
  selectDeleteTag: Tag
}
const initialState = (): State => ({
  loading: false,
  selectDeleteTag: {
    id: 0,
    name: '',
  },
})

export const useDeleteTag = () => {
  const config = useRuntimeConfig()
  const loginStore = useLoginStore()
  const { csrfToken } = storeToRefs(loginStore)
  const { handleUnauthorizedError } = useErrorHandler()

  const state = reactive<State>(initialState())

  const deleteTag = async () => {
    state.loading = true
    try {
      const response = await fetch(
        `${config.public.API_URL}/tags/${state.selectDeleteTag.id}`,
        {
          method: 'DELETE',
          headers: h(csrfToken.value),
          credentials: 'include',
        }
      )
      if (!response.ok) handleUnauthorizedError(response.status)

      return
    } catch (error) {
      console.error(error)
      alert(`エラーが発生しました。${error}`)
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    deleteTag,
    setTag: (tag: Tag) => (state.selectDeleteTag = tag),
  }
}

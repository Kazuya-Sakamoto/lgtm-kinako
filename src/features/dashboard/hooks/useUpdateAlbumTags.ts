import { reactive } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { h } from '@/lib/headers'
import { useErrorHandler } from '@/hooks/useErrorHandler'

type State = {
  input: {
    albumId: number
    tagIds: number[]
  }
  loading: boolean
}
const initialState = (): State => ({
  input: {
    albumId: 0,
    tagIds: [],
  },
  loading: false,
})

export const useUpdateAlbumTags = () => {
  const config = useRuntimeConfig()
  const loginStore = useLoginStore()
  const { csrfToken } = storeToRefs(loginStore)
  const { handleUnauthorizedError } = useErrorHandler()

  const state = reactive<State>(initialState())

  const updateAlbumTags = async () => {
    const params = {
      ...state.input,
    }
    state.loading = true
    try {
      const response = await fetch(
        `${config.public.API_URL}/albums/tags/update`,
        {
          method: 'POST',
          headers: h(csrfToken.value),
          body: JSON.stringify(params),
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
      state.input = initialState().input
    }
  }

  const addSelectedTagIds = (tagId: number) => state.input.tagIds.push(tagId)
  const deleteSelectedTagIds = (tagId: number) =>
    (state.input.tagIds = state.input.tagIds.filter((id) => id !== tagId))

  return {
    state,
    setAlbumId: (albumId: number) => (state.input.albumId = albumId),
    setTagIds: (tagIds: number[]) => (state.input.tagIds = tagIds),
    updateAlbumTags,
    addSelectedTagIds,
    deleteSelectedTagIds,
    resetInput: () => (state.input = initialState().input),
  }
}

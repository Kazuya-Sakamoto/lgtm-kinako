import { ref } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { h } from '@/lib/headers'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import { Album } from '@/hooks/types'

export const useFetchAllAlbums = () => {
  const config = useRuntimeConfig()
  const albums = ref<Album[]>([])
  const albumLoading = ref(false)
  const { handleUnauthorizedError } = useErrorHandler()

  const loginStore = useLoginStore()
  const { csrfToken } = storeToRefs(loginStore)

  const fetchAllAlbums = async () => {
    try {
      albumLoading.value = true
      const response: Response = await fetch(
        `${config.public.API_URL}/albums/all`,
        {
          method: 'GET',
          headers: h(csrfToken.value),
          credentials: 'include',
        }
      )
      if (!response.ok) handleUnauthorizedError(response.status)

      albums.value = (await response.json()) as Album[]
    } catch (error) {
      console.error(error)
    } finally {
      albumLoading.value = false
    }
  }

  return {
    albums,
    albumLoading,
    fetchAllAlbums,
  }
}

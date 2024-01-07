import { ref } from 'vue'
import { useRuntimeConfig } from '@/.nuxt/imports'
import { h } from '@/lib/headers'
import { Album } from '@/hooks/types'

export const useFetchAllAlbums = () => {
  const config = useRuntimeConfig()
  const albums = ref<Album[]>([])
  const albumLoading = ref(false)

  const fetchAllAlbums = async (csrfToken: string) => {
    try {
      albumLoading.value = true
      const response: Response = await fetch(`${config.public.API_URL}/album`, {
        method: 'GET',
        headers: h(csrfToken),
        credentials: 'include',
      })
      if (!response.ok) return

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

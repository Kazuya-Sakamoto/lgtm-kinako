import { ref } from 'vue'
import { useRuntimeConfig } from '@/.nuxt/imports'
import { h } from '@/lib/headers'
import { sendGtagEvent } from '@/lib/gtagEvent'

export type Album = {
  image: string
  id: number
  title: string
}

export const useAlbums = () => {
  const config = useRuntimeConfig()
  const albums = ref<Album[]>([])
  const albumLoading = ref(false)

  const fetchAlbums = async () => {
    try {
      albumLoading.value = true
      const response: Response = await fetch(
        `${config.public.API_URL}/album/random`,
        {
          method: 'GET',
          headers: h(),
          credentials: 'include',
        }
      )
      if (!response.ok) return

      const data: Album[] = await response.json()
      albums.value = data
    } catch (error) {
      console.error(error)
    } finally {
      albumLoading.value = false
    }
  }

  const fetchAllAlbums = async (csrfToken: string) => {
    try {
      albumLoading.value = true
      const response: Response = await fetch(`${config.public.API_URL}/album`, {
        method: 'GET',
        headers: h(csrfToken),
        credentials: 'include',
      })
      if (!response.ok) return

      const data: Album[] = await response.json()
      albums.value = data
    } catch (error) {
      console.error(error)
    } finally {
      albumLoading.value = false
    }
  }

  return {
    albums,
    albumLoading,
    fetchAlbums,
    refetch: () => {
      fetchAlbums()
      sendGtagEvent('refetch_images', {
        event_category: 'actions',
        event_action: 'refetch_images',
        event_label: 'Refetch Images',
      })
    },
    fetchAllAlbums,
  }
}

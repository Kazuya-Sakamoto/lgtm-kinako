import { ref } from 'vue'
import { useRuntimeConfig } from '@/.nuxt/imports'
import { h } from '@/lib/headers'
import { sendGtagEvent } from '@/lib/gtagEvent'
import { Album } from '@/hooks/types'

export const useFetchAlbums = () => {
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
    fetchAlbums,
    refetch: () => {
      fetchAlbums()
      sendGtagEvent('refetch_images', {
        event_category: 'actions',
        event_action: 'refetch_images',
        event_label: 'Refetch Images',
      })
    },
  }
}

import { ref, watch } from 'vue'
import { useRuntimeConfig, useRoute } from 'nuxt/app'
import { h } from '@/lib/headers'
import { sendGtagEvent } from '@/lib/gtagEvent'
import { Album } from '@/hooks/types'

export const useFetchAlbums = () => {
  const config = useRuntimeConfig()
  const route = useRoute()
  const albums = ref<Album[]>([])
  const albumLoading = ref(false)

  const fetchAlbums = async (tag?: string) => {
    try {
      albumLoading.value = true
      const url = tag
        ? `${config.public.API_URL}/albums?tag=${tag}`
        : `${config.public.API_URL}/albums`
      const response: Response = await fetch(url, {
        method: 'GET',
        headers: h(),
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

  watch(
    () => route.query.tag,
    (newTag) => {
      fetchAlbums(newTag)
    }
  )

  return {
    albums,
    albumLoading,
    fetchAlbums,
    refetch: () => {
      fetchAlbums(route.query.tag)
      sendGtagEvent('refetch_images', {
        event_category: 'actions',
        event_action: 'refetch_images',
        event_label: 'Refetch Images',
      })
    },
  }
}

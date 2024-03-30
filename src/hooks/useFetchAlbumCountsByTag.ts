import { ref } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { h } from '@/lib/headers'

export const useFetchAlbumCountsByTag = () => {
  const config = useRuntimeConfig()
  const counts = ref<Array<{ tag_id: number; count: number }>>([])
  const loading = ref(false)

  const fetchAlbumCountsByTag = async () => {
    try {
      loading.value = true
      const response: Response = await fetch(
        `${config.public.API_URL}/albums/tags/count`,
        {
          method: 'GET',
          headers: h(),
          credentials: 'include',
        }
      )
      if (!response.ok) return

      const data = await response.json()
      counts.value = data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    counts,
    loading,
    fetchAlbumCountsByTag,
  }
}

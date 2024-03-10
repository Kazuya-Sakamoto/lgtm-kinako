import { ref } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'
import { h } from '@/lib/headers'
import { Tag } from '@/hooks/types'

export const useFetchTags = () => {
  const config = useRuntimeConfig()
  const tags = ref<Tag[]>([])
  const loading = ref(false)

  const fetchTags = async () => {
    try {
      loading.value = true
      const response: Response = await fetch(`${config.public.API_URL}/tags`, {
        method: 'GET',
        headers: h(),
        credentials: 'include',
      })
      if (!response.ok) return

      tags.value = (await response.json()) as Tag[]
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    tags,
    loading,
    fetchTags,
  }
}

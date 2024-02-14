import { useRuntimeConfig } from '@/.nuxt/imports'
import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login'
import { h } from '@/lib/headers'
import { useErrorHandler } from '@/hooks/useErrorHandler'
import { CreateNewAlbumParams } from '@/hooks/types'

export const useCreateAlbum = () => {
  const config = useRuntimeConfig()
  const loginStore = useLoginStore()
  const { csrfToken } = storeToRefs(loginStore)
  const { handleUnauthorizedError } = useErrorHandler()

  const createNewAlbum = async ({ title, imageUrl }: CreateNewAlbumParams) => {
    const params = { image: imageUrl, title }
    const response = await fetch(`${config.public.API_URL}/albums`, {
      method: 'POST',
      headers: h(csrfToken.value),
      body: JSON.stringify(params),
      credentials: 'include',
    })
    if (!response.ok) handleUnauthorizedError(response.status)

    return response.json()
  }

  return { createNewAlbum }
}

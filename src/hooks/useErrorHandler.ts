import { useLoginStore } from '@/store/login'
import { useRouter } from 'nuxt/app'

const HTTP_STATUS_UNAUTHORIZED = 401

export const useErrorHandler = () => {
  const router = useRouter()
  const loginStore = useLoginStore()
  const { clearToken } = loginStore

  const handleUnauthorizedError = async (status: Response['status']) => {
    if (status === HTTP_STATUS_UNAUTHORIZED) {
      alert('Tokenが無効です。再度ログインしてください。')
      await clearToken()
      router.push('/')
      return
    }

    throw new Error(`Unexpected network response: ${status}`)
  }

  return { handleUnauthorizedError }
}

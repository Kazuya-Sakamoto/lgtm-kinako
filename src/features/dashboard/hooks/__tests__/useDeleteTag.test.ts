import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDeleteTag } from '../useDeleteTag'
import { ref, Ref } from 'vue'

const API_URL = 'http://localhost:8081/api/v1'
vi.mock('nuxt/app', () => ({
  useRuntimeConfig: () => ({
    public: { API_URL },
  }),
}))
vi.mock('@/store/login', () => ({
  useLoginStore: vi.fn(() => {
    const csrfToken: Ref<string> = ref('test-token')
    return {
      csrfToken,
    }
  }),
}))
vi.mock('@/lib/headers', () => ({
  h: vi.fn(() => ({
    'Content-Type': 'application/json',
    'X-CSRF-Token': 'test-token',
  })),
}))
vi.mock('@/hooks/useErrorHandler', () => ({
  useErrorHandler: vi.fn(() => ({
    handleUnauthorizedError: vi.fn(),
  })),
}))

describe('useDeleteTag', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('deleteTag', () => {
    it('タグを正常に削除できること', async () => {
      const { state, deleteTag, setTag } = useDeleteTag()
      setTag({ id: 1, name: '削除対象タグ' })

      const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': 'test-token',
      }

      const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValueOnce(
        new Response(JSON.stringify({ id: 1, name: '削除対象タグ' }), {
          status: 200,
          headers: new Headers(headers),
          statusText: 'OK',
        })
      )

      await deleteTag()

      expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/tags/1`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'test-token',
        },
        credentials: 'include',
      })
      expect(state.loading).toBe(false)
      expect(state.selectDeleteTag.id).toBe(1)
    })
  })
})

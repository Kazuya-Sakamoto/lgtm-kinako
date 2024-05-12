import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCreateTag } from './useCreateTag'
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

describe('useCreateTag', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('onInput', () => {
    it('タグ名が入力できること', () => {
      const { state, onInput } = useCreateTag()
      onInput({ name: 'name', value: '新規タグ' })
      expect(state.input.name).toBe('新規タグ')
    })
  })

  describe('createTag', () => {
    it('タグ作成が正常にできること', async () => {
      const { createTag, state } = useCreateTag()
      state.input.name = '新規タグ'
      const headers = {
        'Content-Type': 'application/json',
        'X-CSRF-Token': 'test-token',
      }

      const mockJsonResponse = Promise.resolve({ id: 1, name: '新規タグ' })
      const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValueOnce(
        new Response(JSON.stringify({ id: 1, name: '新規タグ' }), {
          status: 200,
          headers: new Headers(headers),
          statusText: 'OK',
        })
      )

      const response = await createTag()

      expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/tags`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ name: '新規タグ' }),
        credentials: 'include',
      })
      expect(response).toStrictEqual(await mockJsonResponse)
      expect(state.loading).toBe(false)
    })
  })
})

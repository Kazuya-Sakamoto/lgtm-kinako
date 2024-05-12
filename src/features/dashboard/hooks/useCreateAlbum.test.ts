import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCreateAlbum } from './useCreateAlbum'
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

describe('useCreateAlbum', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('onInput', () => {
    it('タイトルが入力できること', () => {
      const { state, onInput } = useCreateAlbum()
      onInput({ name: 'title', value: 'New Album' })
      expect(state.input.title).toBe('New Album')
    })
  })

  describe('onFileChange', () => {
    it('ファイル変更ができること', () => {
      const { onFileChange } = useCreateAlbum()
      const mockFile = new File([''], 'test.png', { type: 'image/png' })
      const mockEvt = { target: { files: [mockFile] } } as unknown as Event

      const readAsDataURL = vi.fn()
      window.FileReader = vi.fn(() => ({
        readAsDataURL,
        onload: null,
      })) as any

      onFileChange(mockEvt)
      expect(readAsDataURL).toHaveBeenCalledWith(mockFile)
    })
  })

  describe('createAlbum', () => {
    it('アルバムの作成が正常にできること', async () => {
      const { createAlbum, state } = useCreateAlbum()
      state.input = { image: 'data:image/png;base64,...', title: 'アルバム1' }

      const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValueOnce(
        new Response(JSON.stringify({ message: 'Album Created' }), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': 'test-token',
          },
        })
      )

      await createAlbum()

      expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/albums`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'test-token',
        },
        body: JSON.stringify(state.input),
        credentials: 'include',
      })
      expect(state.loading).toBe(false)
    })
  })
})

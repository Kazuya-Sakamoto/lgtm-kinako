import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCreateAlbum } from '../useCreateAlbum'
import { ref, Ref } from 'vue'

vi.mock('nuxt/app', () => ({
  useRuntimeConfig: () => ({
    public: { API_URL: 'http://localhost:8081/api/v1' },
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

  it('アルバムを作成するときの入力を処理できる', () => {
    const { state, onInput } = useCreateAlbum()
    onInput({ name: 'title', value: 'New Album' })
    expect(state.input.title).toBe('New Album')
  })

  it('ファイル変更イベントを処理できる', () => {
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

  it('アルバム作成APIへのPOSTリクエストを送信する', async () => {
    const { createAlbum, state } = useCreateAlbum()
    state.input = { image: 'data:image/png;base64,...', title: 'アルバム1' }

    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Album created' }),
    })

    await createAlbum()

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:8081/api/v1/albums',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'test-token',
        },
        body: JSON.stringify(state.input),
        credentials: 'include',
      }
    )
    expect(state.loading).toBe(false)
  })
})

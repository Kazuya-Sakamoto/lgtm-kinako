import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useUpdateAlbumTags } from '../useUpdateAlbumTags'
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

describe('useUpdateAlbumTags', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('updateAlbumTags', () => {
    it('アルバムのタグの更新が正常にできること', async () => {
      const { updateAlbumTags, state, setAlbumId, setTagIds } =
        useUpdateAlbumTags()
      setAlbumId(1)
      setTagIds([10, 20])

      const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValueOnce(
        new Response(JSON.stringify({ message: 'Updated successfully' }), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': 'test-token',
          },
        })
      )

      await updateAlbumTags()

      expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/albums/tags/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': 'test-token',
        },
        body: JSON.stringify({ albumId: 1, tagIds: [10, 20] }),
        credentials: 'include',
      })
      expect(state.loading).toBe(false)
    })
  })

  it('選択されたタグIDを追加および削除できる', () => {
    const { state, addSelectedTagIds, deleteSelectedTagIds } =
      useUpdateAlbumTags()
    addSelectedTagIds(5)
    expect(state.input.tagIds.includes(5)).toBe(true)

    deleteSelectedTagIds(5)
    expect(state.input.tagIds.includes(5)).toBe(false)
  })
})

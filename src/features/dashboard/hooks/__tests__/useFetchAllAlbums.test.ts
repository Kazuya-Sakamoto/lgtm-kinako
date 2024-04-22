import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFetchAllAlbums } from '../useFetchAllAlbums'
import { Album } from '@/hooks/types'
import { mockAlbumsQuery } from '@/mock/mockQuery'
import { ref } from 'vue'

vi.mock('@/lib/headers', () => ({
  h: vi.fn(() => ({
    'Content-Type': 'application/json',
    'X-CSRF-Token': 'test-token',
  })),
}))
vi.mock('@/store/login', () => ({
  useLoginStore: vi.fn(() => ({
    csrfToken: ref('test-token'),
  })),
}))
vi.mock('@/hooks/useErrorHandler', () => ({
  useErrorHandler: vi.fn(() => ({
    handleUnauthorizedError: vi.fn(),
  })),
}))

describe('useFetchAllAlbums', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.mock('nuxt/app', () => ({
      useRuntimeConfig: () => ({
        public: { API_URL: 'http://localhost:8080/api/v1' },
      }),
    }))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('アルバムを正常に取得できること', async () => {
    const mockAlbums: Album[] = mockAlbumsQuery()
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockAlbums),
    } as unknown as Response)

    const { albums, fetchAllAlbums, albumLoading } = useFetchAllAlbums()
    await fetchAllAlbums()

    expect(albums.value).toEqual(mockAlbums)
    expect(albums.value.length).toBe(6)
    expect(albums.value[0].title).toBe('おすわり')
    expect(albumLoading.value).toBe(false)
  })
})

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFetchAlbumCountsByTag } from './useFetchAlbumCountsByTag'

const API_URL = 'http://localhost:8081/api/v1'
vi.mock('nuxt/app', () => ({
  useRuntimeConfig: () => ({
    public: { API_URL },
  }),
}))

vi.mock('@/lib/headers', () => ({
  h: () => ({ 'Content-Type': 'application/json' }),
}))

describe('useFetchAlbumCountsByTag', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('fetchAlbumCountsByTag', () => {
    it('正常にアルバムのタグカウントを取得できること', async () => {
      const mockData = [
        { tag_id: 1, count: 10 },
        { tag_id: 2, count: 15 },
      ]
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as unknown as Response)

      const { counts, fetchAlbumCountsByTag } = useFetchAlbumCountsByTag()
      await fetchAlbumCountsByTag()

      expect(counts.value).toEqual(mockData)
      expect(counts.value.length).toBe(2)
      expect(counts.value[0].tag_id).toBe(1)
      expect(counts.value[0].count).toBe(10)
    })
  })
})

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFetchTags } from '../useFetchTags'
import { Tag } from '@/hooks/types'

const API_URL = 'http://localhost:8081/api/v1'
vi.mock('nuxt/app', () => ({
  useRuntimeConfig: () => ({
    public: { API_URL },
  }),
}))
vi.mock('@/lib/headers', () => ({
  h: () => ({ 'Content-Type': 'application/json' }),
}))

describe('useFetchTags', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('fetchTags', () => {
    it('タグを正常に取得できること', async () => {
      const mockTags: Tag[] = [{ id: 1, name: 'Vue' }]
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockTags),
      } as unknown as Response)

      const { tags, fetchTags } = useFetchTags()
      await fetchTags()

      expect(tags.value).toEqual(mockTags)
      expect(tags.value.length).toBe(1)
      expect(tags.value[0].name).toBe('Vue')
    })
  })
})

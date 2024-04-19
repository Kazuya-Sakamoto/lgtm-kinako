import { describe, it, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
// import { useFetchTags } from '@/hooks/useFetchTags'
// import { Tag } from '@/hooks/types'

vi.mock('nuxt/app', () => ({
  useRuntimeConfig: () => ({
    public: { API_URL: 'http://localhost:8080/api/v1' },
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

  it('fetchTags', async () => {
    // const mockTags: Tag[] = [{ id: 1, name: 'Vue' }]
    // vi.spyOn(global, 'fetch').mockResolvedValueOnce({
    //   ok: true,
    //   json: () => Promise.resolve(mockTags),
    // } as unknown as Response)
    // const { tags, fetchTags } = useFetchTags()
    // await fetchTags()
    // expect(tags.value).toEqual(mockTags)
  })
})

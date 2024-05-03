import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFetchAlbums } from '../useFetchAlbums'
import { Album } from '@/hooks/types'
import { mockAlbumsQuery } from '@/mock/mockQuery'

vi.mock('@/lib/headers', () => ({
  h: () => ({ 'Content-Type': 'application/json' }),
}))
vi.mock('@/lib/gtagEvent', () => ({
  sendGtagEvent: vi.fn(),
}))

describe('useFetchAlbums', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.mock('nuxt/app', () => ({
      useRuntimeConfig: () => ({
        public: { API_URL: 'http://localhost:8081/api/v1' },
      }),
      useRoute: () => ({
        query: {},
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

    const { albums, fetchAlbums } = useFetchAlbums()
    await fetchAlbums()

    expect(albums.value).toEqual(mockAlbums)
    expect(albums.value.length).toBe(6)
    expect(albums.value[0].title).toBe('おすわり')
  })

  it('タグに基づいてアルバムを取得ができること', async () => {
    const mockAlbums: Album[] = mockAlbumsQuery()
    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockAlbums),
    } as unknown as Response)

    const { fetchAlbums } = useFetchAlbums()
    await fetchAlbums('2')

    expect(fetchSpy).toHaveBeenCalledWith(
      'http://localhost:8081/api/v1/albums?tag=2',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    )
    expect(fetchSpy).toHaveBeenCalledTimes(1)
  })
})

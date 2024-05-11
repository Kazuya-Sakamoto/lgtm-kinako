import { describe, it, expect } from 'vitest'
import { getLoadingAlbumCount } from './getLoadingAlbumCount'

describe('getLoadingAlbumCount', () => {
  it('指定されたtagIDに対応するAlbumの数を返す', () => {
    const tagsWithCounts = [
      { id: 1, count: 5 },
      { id: 2, count: 10 },
    ]
    const result = getLoadingAlbumCount(tagsWithCounts, 2)
    expect(result).toBe(10)
  })

  it('tagIDに対応するAlbumがない場合、デフォルトローディング数の10件を返す', () => {
    const tagsWithCounts = [
      { id: 1, count: 5 },
      { id: 2, count: 10 },
    ]
    const result = getLoadingAlbumCount(tagsWithCounts, 3)
    expect(result).toBe(10)
  })
})

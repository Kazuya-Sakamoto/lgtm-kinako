import { describe, it, expect } from 'vitest'
import { mergeTagsWithAlbumCounts } from '../mergeTagsWithAlbumCounts'
import { Tag } from '@/hooks/types'

describe('mergeTagsWithAlbumCounts', () => {
  it('tagとalbumCountsを正しく結びつける', () => {
    const tags: Tag[] = [
      { id: 1, name: 'かわいい' },
      { id: 2, name: 'キュート' },
      { id: 3, name: '赤ちゃん' },
    ]
    const albumCounts = [
      { tag_id: 1, count: 5 },
      { tag_id: 2, count: 10 },
    ]
    const result = mergeTagsWithAlbumCounts(tags, albumCounts)

    expect(result).toEqual([
      { id: 1, name: 'かわいい', count: 5 },
      { id: 2, name: 'キュート', count: 10 },
      { id: 3, name: '赤ちゃん', count: 0 },
    ])
  })

  it('tagにalbumCountsがない場合は、countに0を設定する', () => {
    const tags: Tag[] = [
      { id: 1, name: 'かわいい' },
      { id: 2, name: 'キュート' },
    ]
    const albumCounts = [{ tag_id: 1, count: 3 }]
    const result = mergeTagsWithAlbumCounts(tags, albumCounts)

    expect(result).toEqual([
      { id: 1, name: 'かわいい', count: 3 },
      { id: 2, name: 'キュート', count: 0 },
    ])
  })
})

import { Tag } from '@/hooks/types'

export const mergeTagsWithAlbumCounts = (
  tags: Tag[],
  albumCounts: Array<{ tag_id: number; count: number }>
) => {
  return tags.map((tag) => {
    const count =
      albumCounts.find((count) => count.tag_id === tag.id)?.count || 0
    return { ...tag, count }
  })
}

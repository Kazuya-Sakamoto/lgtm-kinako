const DEFAULT_LOADING_ALBUM_COUNT = 10

export const getLoadingAlbumCount = (
  tagsWithAlbumCounts: Array<{ id: number; count: number }>,
  currentTagId: number
) => {
  return (
    tagsWithAlbumCounts.find((tag) => tag.id === currentTagId)?.count ??
    DEFAULT_LOADING_ALBUM_COUNT
  )
}

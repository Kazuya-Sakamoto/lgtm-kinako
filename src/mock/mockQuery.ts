import { Album as AlbumQuery } from '@/hooks/types'

export const mockAlbumsQuery = (): AlbumQuery[] => [
  {
    id: 1,
    title: 'きなこのLGTM初めての投稿',
    tags: [
      {
        id: 1,
        name: 'かわいい',
      },
    ],
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20240210220905.JPG',
  },
  {
    id: 2,
    title: 'いちご',
    tags: [
      {
        id: 1,
        name: 'かわいい',
      },
      {
        id: 2,
        name: 'きゅーと',
      },
    ],
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20240210221016.JPG',
  },
  {
    id: 3,
    title: 'はじめてのゆき',
    tags: [],
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20240210220957.JPG',
  },
]

import {
  Album as AlbumQuery,
  Tag as TagQuery,
  AlbumTagCounts,
} from '@/hooks/types'

const mockAlbumsQuery = (): AlbumQuery[] => [
  {
    id: 1,
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20230926222306.JPG',
    title: 'おすわり',
    tags: [
      { id: 1, name: 'かわいい' },
      { id: 2, name: 'へんてこ' },
    ],
  },
  {
    id: 2,
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20230926223208.JPG',
    title: 'ひょっこり',
    tags: [],
  },
  {
    id: 3,
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20231118132545.JPG',
    title: 'おさない',
    tags: [{ id: 1, name: 'かわいい' }],
  },
  {
    id: 4,
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20231017223401.JPG',
    title: '赤ちゃん',
    tags: [
      { id: 1, name: 'かわいい' },
      { id: 3, name: 'えもい' },
    ],
  },
  {
    id: 5,
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20231010220708.JPG',
    title: 'しろまリも',
    tags: [{ id: 1, name: 'かわいい' }],
  },
  {
    id: 6,
    image: 'https://d18g0hf2wnz3gs.cloudfront.net/20231017223401.JPG',
    title: '赤ちゃん',
    tags: [
      { id: 1, name: 'かわいい' },
      { id: 3, name: 'えもい' },
    ],
  },
]

const mockTagsQuery = (): TagQuery[] => [
  { id: 1, name: 'かわいい' },
  { id: 2, name: 'へんてこ' },
  { id: 3, name: 'えもい' },
  { id: 4, name: 'いべんと' },
]

const mockAlbumTagCounts = (): AlbumTagCounts[] => [
  { count: 10, id: 1, name: 'かわいい' },
  { count: 1, id: 2, name: 'へんてこ' },
  { count: 5, id: 3, name: 'えもい' },
  { count: 20, id: 4, name: 'いべんと' },
]

export { mockAlbumsQuery, mockTagsQuery, mockAlbumTagCounts }

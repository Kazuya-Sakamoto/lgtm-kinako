export type AlbumQuery = {
  id: number
  title: string
  image: string
}

export const albumsQuery = (): AlbumQuery[] => [
  {
    id: 1,
    title: 'きなこのLGTM初めての投稿',
    image:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/56709557/262871504-48c3b110-e359-4376-958c-da671d6cd109.JPG',
  },
  {
    id: 2,
    title: 'ソーーーーキューーと',
    image:
      'https://github.com/team-up-develop/teamup-develop-front/assets/56709557/43a56d97-80be-4f90-b97f-531db9539c3f',
  },
  {
    id: 3,
    title: '可愛すぎるだろ',
    image:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/56709557/262871504-48c3b110-e359-4376-958c-da671d6cd109.JPG',
  },
  {
    id: 4,
    title: 'トイプードルなのか？',
    image:
      'https://github.com/team-up-develop/teamup-develop-front/assets/56709557/7238924c-4c11-4e66-ab9d-bb0252f34dd5',
  },
  {
    id: 5,
    title: '太ってね？',
    image:
      'https://github.com/team-up-develop/teamup-develop-front/assets/56709557/43a56d97-80be-4f90-b97f-531db9539c3f',
  },
  {
    id: 6,
    title: '6.48kgってwww',
    image:
      'https://github-production-user-asset-6210df.s3.amazonaws.com/56709557/262871504-48c3b110-e359-4376-958c-da671d6cd109.JPG',
  },
  {
    id: 7,
    title: 'ポークピッツ',
    image:
      'https://github.com/team-up-develop/teamup-develop-front/assets/56709557/7238924c-4c11-4e66-ab9d-bb0252f34dd5',
  },
  {
    id: 8,
    title: 'ポニョ',
    image:
      'https://github.com/team-up-develop/teamup-develop-front/assets/56709557/43a56d97-80be-4f90-b97f-531db9539c3f',
  },
]

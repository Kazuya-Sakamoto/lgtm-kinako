export type Album = {
  image: string
  id: number
  title: string
  tags: Tag[]
}

export type CreateNewAlbumParams = {
  title: string
  imageUrl: string
}

export type LoginParams = {
  email: string
  password: string
}

export type Tag = {
  id: number
  name: string
}

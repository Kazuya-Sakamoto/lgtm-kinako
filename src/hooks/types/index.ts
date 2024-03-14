export type Album = {
  id: number
  title: string
  image: string
  tags: Tag[]
}

export type CreateAlbumParams = {
  title: string
  image: string
}

export type LoginParams = {
  email: string
  password: string
}

export type Tag = {
  id: number
  name: string
}

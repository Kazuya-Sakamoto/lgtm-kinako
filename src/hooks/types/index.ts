export type Album = {
  image: string
  id: number
  title: string
}

export type CreateNewAlbumParams = {
  title: string
  imageUrl: string
}

export type LoginParams = {
  email: string
  password: string
}

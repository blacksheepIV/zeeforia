export type ArtWorkCategory = 'collections' | 'on the wall'

export type Artwork = {
  id: string
  title: string
  imageUrl: string
  info: string
  category: ArtWorkCategory
  tags: string[]
  date: string
}

export type SpotlightArtworks = Pick<Artwork, 'title' | 'imageUrl' | 'info'>

export type SortOption = 'newest' | 'oldest' | 'title'

import { Artwork, SortOption } from '@/app/types'
import Image from 'next/image'
// import { LoadingSpinner } from './LoadingSpinner';

interface ArtworkGridProps {
  artworks: Artwork[]
  isLoading: boolean
  sortOption: SortOption
  selectedTags: string[]
}

export const ArtworkGrid = ({
  artworks,
  isLoading,
  sortOption,
  selectedTags,
}: ArtworkGridProps) => {
  if (isLoading)
    return (
      <span className="font-montserrat tracking-widest font-xl">Loding...</span>
    )

  const filteredArtworks = artworks.filter(
    artwork =>
      selectedTags.length === 0 ||
      artwork.tags.some(tag => selectedTags.includes(tag)),
  )

  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {sortedArtworks.map(artwork => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}

const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  return (
    <div
      key={artwork.title}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="w-full h-full  transform group-hover:scale-110 transition-transform duration-500 rounded-lg">
        <Image
          src={`${artwork.imageUrl}`}
          alt={artwork.title}
          width={800}
          height={1200}
          className="w-full h-full object-fit"
        ></Image>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-lg">
        <div>
          <h3 className="text-xl font-bold text-white">{artwork.title}</h3>
          <p className="text-sm text-gray-300">{artwork.info}</p>
        </div>
      </div>
    </div>
  )
}

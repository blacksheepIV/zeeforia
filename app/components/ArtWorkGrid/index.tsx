import { Artwork, SortOption } from '@/app/types'
import Image from 'next/image'
// import { LoadingSpinner } from './LoadingSpinner';
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

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
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      {sortedArtworks.map(artwork => (
        <a
          key={artwork.id}
          href={artwork.imageUrl}
          data-src={artwork.imageUrl}
          data-sub-html={` <div className="flex flex-col gap-1">
          <h3 className="text-lg lg:text-xl font-bold text-white">${artwork.title}</h3>
          <p className="text-lg lg:text-xl text-gray-300">${artwork.info}</p>
        </div>`}
        >
          <ArtworkCard key={artwork.id} artwork={artwork} />
        </a>
      ))}
    </LightGallery>
  )
}

const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg h-[auto] lg:h-[310]">
      <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-500 rounded-lg">
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

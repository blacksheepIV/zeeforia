import { Collection } from '@/app/types'
import { clsx } from 'clsx'

interface CollectionSelectorProps {
  collections: Collection[]
  selectedCollectionId: string | null
  onCollectionSelect: (collectionId: string) => void
}

export const CollectionSelector = ({
  collections,
  selectedCollectionId,
  onCollectionSelect,
}: CollectionSelectorProps) => {
  if (collections.length === 0) return null

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {collections.map(collection => (
        <button
          key={collection.id}
          onClick={() => onCollectionSelect(collection.id)}
          className={clsx(
            'relative px-6 py-3 rounded-lg transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-steel_blue-500',
            selectedCollectionId === collection.id
              ? 'bg-delft_blue text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow',
          )}
        >
          <span className="relative z-10">{collection.collectionName}</span>
          {selectedCollectionId === collection.id && (
            <div className="absolute inset-0 bg-delft_blue rounded-lg"></div>
          )}
        </button>
      ))}
    </div>
  )
}

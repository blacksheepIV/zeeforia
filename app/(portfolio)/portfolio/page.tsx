'use client'
import React, { useState, useEffect } from 'react'
import CategoryTabs from '@/app/components/CategoryTabs'
import { Controls } from '@/app/components/Controls'
import { ArtworkGrid } from '@/app/components/ArtWorkGrid'
import { CollectionSelector } from '@/app/components/CollectionSelector'

import { artworks, collections } from '@/app/constants/galleryData'
import type { SortOption, ArtWorkCategory } from '@/app/types'

function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    useState<ArtWorkCategory>('collections')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCollectionId, setSelectedCollectionId] = useState<
    string | null
  >(collections.length > 0 ? collections[0].id : null)
  const [sortOption, setSortOption] = useState<SortOption>('newest')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const filteredArtworks = artworks.filter(artwork => {
    if (artwork.category !== activeCategory) return false
    if (activeCategory === 'collections' && selectedCollectionId) {
      return artwork.collectionId === selectedCollectionId
    }
    return true
  })

  const availableTags = Array.from(
    new Set(filteredArtworks.flatMap(artwork => artwork.tags)),
  )

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag],
    )
  }

  const selectedCollection = selectedCollectionId
    ? collections.find(c => c.id === selectedCollectionId)
    : null

  return (
    <div className=" min-h-screen w-full bg-gray-50">
      <header className="bg-white shadow-sm pb-6">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-6">
            {/* <Gallery className="w-8 h-8 text-blue-600 mr-2" /> */}
            <h1 className="text-3xl font-bold text-delft_blue tracking-widest">
              Portfolio{' '}
              <span className="text-amaranth_purple tracking-widest">
                Gallery
              </span>
            </h1>
          </div>
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
        {activeCategory === 'collections' && (
          <>
            <CollectionSelector
              collections={collections}
              selectedCollectionId={selectedCollectionId}
              onCollectionSelect={setSelectedCollectionId}
            />
            {selectedCollection && (
              <div className="mt-6 text-center max-w-3xl mx-auto px-4 lg:px-0 ">
                <h2 className="text-xl font-semibold text-steel_blue-400 mb-2 font-montserrat tracking-widest">
                  {selectedCollection.collectionName}
                </h2>
                <p className="text-gray-600 leading-relaxed font-quicksand">
                  {selectedCollection.collectionDescription}
                </p>
              </div>
            )}
          </>
        )}
      </header>

      <main className="max-w-7xl mx-auto py-6">
        <Controls
          sortOption={sortOption}
          onSortChange={setSortOption}
          availableTags={availableTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
        />

        <ArtworkGrid
          isLoading={isLoading}
          artworks={filteredArtworks}
          sortOption={sortOption}
          selectedTags={selectedTags}
        />
      </main>
    </div>
  )
}

export default PortfolioPage

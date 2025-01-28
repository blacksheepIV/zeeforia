'use client'
import React, { useState, useEffect } from 'react'
import CategoryTabs from '@/app/components/CategoryTabs'
import { Controls } from '@/app/components/Controls'
import { ArtworkGrid } from '@/app/components/ArtWorkGrid'

import { artworks } from '@/app/constants/galleryData'
import type { SortOption, ArtWorkCategory } from '@/app/types'

function PortfolioPage() {
  const [activeCategory, setActiveCategory] =
    useState<ArtWorkCategory>('collections')
  const [isLoading, setIsLoading] = useState(true)
  const [sortOption, setSortOption] = useState<SortOption>('newest')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [activeCategory])

  const filteredArtworks = artworks.filter(
    artwork => artwork.category === activeCategory,
  )

  const availableTags = Array.from(
    new Set(filteredArtworks.flatMap(artwork => artwork.tags)),
  )

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag],
    )
  }

  return (
    <div className=" min-h-screen w-full bg-gray-50">
      <header className="bg-white shadow-sm">
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
          artworks={filteredArtworks}
          isLoading={isLoading}
          sortOption={sortOption}
          selectedTags={selectedTags}
        />
      </main>
    </div>
  )
}

export default PortfolioPage

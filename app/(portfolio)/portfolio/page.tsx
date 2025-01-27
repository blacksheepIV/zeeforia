'use client'
import CategoryTabs from '@/app/components/CategoryTabs'
import React, { useState } from 'react'

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<
    'collections' | 'on the wall'
  >('collections')
  // const [isLoading, setIsLoading] = useState(true)
  // const [sortOption, setSortOption] = useState<SortOption>('newest');
  //const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <main className=" min-h-screen w-full bg-gray-50">
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
    </main>
  )
}

export default PortfolioPage

import { clsx } from 'clsx'

interface CategoryTabsProps {
  activeCategory: 'collections' | 'on the wall'
  onCategoryChange: (category: 'collections' | 'on the wall') => void
}

const CategoryTabs = ({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) => {
  return (
    <div className="relative flex space-x-4 justify-center mb-8">
      <button
        onClick={() => onCategoryChange('collections')}
        className={clsx(
          'px-6 py-2 text-lg font-medium rounded-full transition-colors relative',
          activeCategory === 'collections'
            ? 'text-steel_blue-500'
            : 'text-raisin_black-800 hover:text-steel_blue-400',
        )}
        aria-current={activeCategory === 'collections' ? 'page' : undefined}
      >
        Collection Name
        {activeCategory === 'collections' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-steel_blue-600" />
        )}
      </button>
      <button
        onClick={() => onCategoryChange('on the wall')}
        className={clsx(
          'px-6 py-2 text-lg font-medium rounded-full transition-colors relative',
          activeCategory === 'on the wall'
            ? 'text-steel_blue-500'
            : 'text-gray-600 hover:text-steel_blue-400',
        )}
        aria-current={activeCategory === 'on the wall' ? 'page' : undefined}
      >
        the Wall
        {activeCategory === 'on the wall' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-steel_blue-600" />
        )}
      </button>
    </div>
  )
}

export default CategoryTabs

import { clsx } from 'clsx'
import { SortOption } from '@/app/types'

interface ControlsProps {
  sortOption: SortOption
  onSortChange: (option: SortOption) => void
  availableTags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
}

export const Controls = ({
  sortOption,
  onSortChange,
  availableTags,
  selectedTags,
  onTagToggle,
}: ControlsProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 px-4 font-quicksand">
      <div className="flex flex-wrap gap-2">
        {availableTags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={clsx(
              'px-3 py-1 rounded-full text-sm font-medium transition-colors',
              selectedTags.includes(tag)
                ? 'bg-delft_blue text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            )}
            aria-pressed={selectedTags.includes(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <select
        value={sortOption}
        onChange={e => onSortChange(e.target.value as SortOption)}
        className="px-3 py-1 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-steel_blue-500 font-quicksand"
        aria-label="Sort artworks"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="title">Title A-Z</option>
      </select>
    </div>
  )
}

import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCuisine: string;
  onCuisineChange: (cuisine: string) => void;
  selectedPrice: number | null;
  onPriceChange: (price: number | null) => void;
  cuisines: string[];
}

export default function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedCuisine,
  onCuisineChange,
  selectedPrice,
  onPriceChange,
  cuisines,
}: SearchFilterProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500" />
        <input
          type="text"
          placeholder="Search restaurants, cuisines, neighborhoods..."
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-charcoal-900 border border-charcoal-800/50 rounded-lg text-sm text-cream-100 placeholder-charcoal-500 focus:outline-none focus:border-burgundy-500/50 transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-charcoal-400 uppercase tracking-wider">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filter</span>
        </div>

        {/* Cuisine Filter */}
        <select
          value={selectedCuisine}
          onChange={e => onCuisineChange(e.target.value)}
          className="px-3 py-1.5 bg-charcoal-900 border border-charcoal-800/50 rounded text-sm text-cream-200 focus:outline-none focus:border-burgundy-500/50 cursor-pointer"
        >
          <option value="">All Cuisines</option>
          {cuisines.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Price Filter */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map(price => (
            <button
              key={price}
              type="button"
              onClick={() => onPriceChange(selectedPrice === price ? null : price)}
              className={`px-2.5 py-1 rounded text-sm transition-colors ${
                selectedPrice === price
                  ? 'bg-burgundy-500 text-cream-100'
                  : 'bg-charcoal-900 text-charcoal-400 border border-charcoal-800/50 hover:text-cream-200'
              }`}
            >
              {'$'.repeat(price)}
            </button>
          ))}
        </div>

        {/* Clear */}
        {(searchQuery || selectedCuisine || selectedPrice) && (
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              onCuisineChange('');
              onPriceChange(null);
            }}
            className="text-xs text-burgundy-500 hover:text-burgundy-400 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}

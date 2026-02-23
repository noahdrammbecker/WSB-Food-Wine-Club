import { useState, useMemo } from 'react';
import { restaurants } from '../data/restaurants';
import RestaurantCard from '../components/restaurants/RestaurantCard';
import SearchFilter from '../components/restaurants/SearchFilter';

export default function Restaurants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const cuisines = useMemo(
    () => [...new Set(restaurants.map(r => r.cuisine))].sort(),
    []
  );

  const filtered = useMemo(() => {
    return restaurants.filter(r => {
      const matchesSearch =
        !searchQuery ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCuisine = !selectedCuisine || r.cuisine === selectedCuisine;
      const matchesPrice = selectedPrice === null || r.priceRange === selectedPrice;

      return matchesSearch && matchesCuisine && matchesPrice;
    });
  }, [searchQuery, selectedCuisine, selectedPrice]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left">
        <span className="text-xs text-burgundy-500 uppercase tracking-[0.3em] mb-2 block">
          Discover
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mb-3">
          Restaurants & Bars
        </h1>
        <p className="text-charcoal-400 max-w-2xl mx-auto sm:mx-0">
          Curated picks from the WSB MBA Food & Wine Club. Each listing features an
          officer-written overview and community ratings.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-10">
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCuisine={selectedCuisine}
          onCuisineChange={setSelectedCuisine}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
          cuisines={cuisines}
        />
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <>
          <p className="text-sm text-charcoal-500 mb-8">
            {filtered.length} {filtered.length === 1 ? 'restaurant' : 'restaurants'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-charcoal-400 mb-2">No restaurants match your criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCuisine('');
              setSelectedPrice(null);
            }}
            className="text-sm text-burgundy-500 hover:text-burgundy-400 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

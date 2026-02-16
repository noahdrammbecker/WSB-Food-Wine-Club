import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import type { Restaurant } from '../../types';
import { getAverageRating, getReviewCount } from '../../data/restaurants';
import StarRating from './StarRating';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

function PriceRange({ level }: { level: number }) {
  return (
    <span className="text-sm">
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className={i < level ? 'text-cream-300' : 'text-charcoal-700'}>
          $
        </span>
      ))}
    </span>
  );
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const avgRating = getAverageRating(restaurant.id);
  const reviewCount = getReviewCount(restaurant.id);

  return (
    <Link
      to={`/restaurants/${restaurant.slug}`}
      className="group block bg-charcoal-900 rounded-lg overflow-hidden border border-charcoal-800/50 hover:border-burgundy-800/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
        {restaurant.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-burgundy-800/90 text-cream-100 text-[10px] uppercase tracking-widest rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg font-semibold text-cream-100 group-hover:text-burgundy-300 transition-colors">
            {restaurant.name}
          </h3>
          <PriceRange level={restaurant.priceRange} />
        </div>

        <p className="text-sm text-charcoal-400 mb-3">{restaurant.cuisine}</p>

        <div className="flex items-center gap-3 mb-3">
          {avgRating > 0 ? (
            <>
              <StarRating rating={avgRating} size="sm" />
              <span className="text-sm text-cream-300 font-medium">{avgRating}</span>
              <span className="text-xs text-charcoal-500">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
            </>
          ) : (
            <span className="text-xs text-charcoal-500 italic">No reviews yet</span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-charcoal-500">
          <MapPin className="w-3 h-3" />
          <span>{restaurant.neighborhood}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {restaurant.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-charcoal-800/50 text-charcoal-400 text-[10px] uppercase tracking-wider rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

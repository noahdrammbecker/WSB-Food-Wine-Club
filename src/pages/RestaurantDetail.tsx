import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Globe, ArrowLeft, ExternalLink } from 'lucide-react';
import { getRestaurantBySlug, getAverageRating, getReviewCount, getRestaurantReviews } from '../data/restaurants';
import StarRating from '../components/restaurants/StarRating';
import ReviewCard from '../components/reviews/ReviewCard';
import ReviewForm from '../components/reviews/ReviewForm';

function PriceRange({ level }: { level: number }) {
  return (
    <span className="text-lg">
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className={i < level ? 'text-cream-300' : 'text-charcoal-700'}>
          $
        </span>
      ))}
    </span>
  );
}

export default function RestaurantDetail() {
  const { slug } = useParams<{ slug: string }>();
  const restaurant = getRestaurantBySlug(slug || '');

  if (!restaurant) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-cream-100 mb-4">Restaurant Not Found</h1>
        <p className="text-charcoal-400 mb-6">We couldn't find the restaurant you're looking for.</p>
        <Link to="/restaurants" className="text-burgundy-800 hover:text-burgundy-700 transition-colors">
          Back to restaurants
        </Link>
      </div>
    );
  }

  const avgRating = getAverageRating(restaurant.id);
  const reviewCount = getReviewCount(restaurant.id);
  const restaurantReviews = getRestaurantReviews(restaurant.id);

  return (
    <div>
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[50vh]">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-1.5 text-sm text-charcoal-300 hover:text-cream-100 mb-4 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Restaurants
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-3">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-cream-300">{restaurant.cuisine}</span>
              <PriceRange level={restaurant.priceRange} />
              {avgRating > 0 && (
                <div className="flex items-center gap-2">
                  <StarRating rating={avgRating} size="sm" />
                  <span className="text-cream-300 font-medium">{avgRating}</span>
                  <span className="text-charcoal-400 text-sm">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-cream-100 mb-4">
                Our Take
              </h2>
              <p className="text-charcoal-300 leading-relaxed text-base">
                {restaurant.overview}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {restaurant.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-charcoal-900 text-charcoal-300 text-xs uppercase tracking-wider rounded border border-charcoal-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-semibold text-cream-100 mb-6">
                Community Reviews
                {reviewCount > 0 && (
                  <span className="text-charcoal-500 text-lg ml-2">({reviewCount})</span>
                )}
              </h2>

              {restaurantReviews.length > 0 ? (
                <div>
                  {restaurantReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <p className="text-charcoal-500 italic py-8 text-center">
                  No reviews yet. Be the first to share your experience.
                </p>
              )}
            </section>

            {/* Review Form */}
            <section>
              <ReviewForm
                restaurantName={restaurant.name}
                onSubmit={(review) => {
                  console.log('Review submitted:', review);
                  alert('Thanks for your review! (In the full version, this will save to the database.)');
                }}
              />
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-charcoal-900 rounded-lg border border-charcoal-800/50 p-6 sticky top-24">
              <h3 className="font-serif text-lg font-semibold text-cream-100 mb-5">Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-burgundy-800 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-cream-200">{restaurant.address}</p>
                    <p className="text-xs text-charcoal-500 mt-0.5">{restaurant.neighborhood}</p>
                  </div>
                </div>

                {restaurant.hours && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-burgundy-800 mt-0.5 shrink-0" />
                    <p className="text-sm text-cream-200">{restaurant.hours}</p>
                  </div>
                )}

                {restaurant.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-burgundy-800 mt-0.5 shrink-0" />
                    <a
                      href={`tel:${restaurant.phone}`}
                      className="text-sm text-cream-200 hover:text-burgundy-300 transition-colors"
                    >
                      {restaurant.phone}
                    </a>
                  </div>
                )}

                {restaurant.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-burgundy-800 mt-0.5 shrink-0" />
                    <a
                      href={restaurant.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream-200 hover:text-burgundy-300 transition-colors inline-flex items-center gap-1"
                    >
                      Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 aspect-[4/3] bg-charcoal-800 rounded flex items-center justify-center">
                <p className="text-xs text-charcoal-500">Map integration coming soon</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Wine, Star, Calendar } from 'lucide-react';
import { restaurants, getUpcomingEvents } from '../data/restaurants';
import RestaurantCard from '../components/restaurants/RestaurantCard';

export default function Home() {
  const featured = restaurants.filter(r => r.featured);
  const nextEvent = getUpcomingEvents()[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Fine dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-950/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-charcoal-950 sm:via-charcoal-950/90 sm:to-charcoal-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/30" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="h-px w-12 bg-burgundy-500" />
              <span className="text-xs text-burgundy-300 uppercase tracking-[0.3em]">
                Wisconsin School of Business
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 leading-tight mb-6">
              Madison's Finest,
              <br />
              <span className="text-burgundy-300 italic">Curated by MBAs</span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Your guide to the best restaurants and bars in Madison — reviewed and rated
              by the WSB MBA Food & Wine Club community.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/restaurants"
                className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors"
              >
                Explore Restaurants
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal-600 hover:border-cream-400 text-cream-200 hover:text-cream-50 text-sm tracking-wide rounded transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal-900 border-y border-charcoal-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-3 gap-10 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Wine className="w-4 h-4 text-burgundy-500" />
                <span className="font-serif text-2xl font-bold text-cream-100">{restaurants.length}</span>
              </div>
              <span className="text-xs text-charcoal-400 uppercase tracking-wider">Restaurants</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="w-4 h-4 text-burgundy-500" />
                <span className="font-serif text-2xl font-bold text-cream-100">50+</span>
              </div>
              <span className="text-xs text-charcoal-400 uppercase tracking-wider">Reviews</span>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-burgundy-500" />
                <span className="font-serif text-2xl font-bold text-cream-100">12</span>
              </div>
              <span className="text-xs text-charcoal-400 uppercase tracking-wider">Events / Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center sm:text-left sm:flex sm:items-end sm:justify-between mb-12">
          <div>
            <span className="text-xs text-burgundy-500 uppercase tracking-[0.3em] mb-2 block">
              Club Picks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100">
              Featured Restaurants
            </h2>
          </div>
          <Link
            to="/restaurants"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-charcoal-400 hover:text-cream-200 transition-colors"
          >
            View all
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        <Link
          to="/restaurants"
          className="sm:hidden flex items-center justify-center gap-1.5 mt-10 text-sm text-charcoal-400 hover:text-cream-200 transition-colors"
        >
          View all restaurants
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>

      {/* Next Event */}
      {nextEvent && (
        <section className="bg-charcoal-900 border-y border-charcoal-800/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="text-xs text-burgundy-500 uppercase tracking-[0.3em] mb-2 block">
                  Next Event
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mb-5">
                  {nextEvent.title}
                </h2>
                <p className="text-charcoal-300 leading-relaxed mb-8">
                  {nextEvent.description}
                </p>
                <div className="space-y-3 mb-10 inline-block text-left">
                  <p className="text-sm text-cream-200">
                    <span className="text-charcoal-500">Date:</span>{' '}
                    {new Date(nextEvent.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-cream-200">
                    <span className="text-charcoal-500">Time:</span> {nextEvent.time}
                  </p>
                  <p className="text-sm text-cream-200">
                    <span className="text-charcoal-500">Location:</span> {nextEvent.location}
                  </p>
                </div>
                <div>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors"
                  >
                    View All Events
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              {nextEvent.imageUrl && (
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={nextEvent.imageUrl}
                    alt={nextEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* About / CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mb-6">
          Join the Club
        </h2>
        <p className="text-charcoal-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you're a wine novice or a seasoned foodie, the WSB MBA Food & Wine Club
          is your community for exploring Madison's culinary scene. Share reviews, discover
          new favorites, and connect over great food.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center gap-2 px-8 py-3 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors"
        >
          Create an Account
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

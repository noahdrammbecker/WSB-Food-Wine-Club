import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { getUpcomingEvents, restaurants } from '../data/restaurants';

export default function Events() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs text-burgundy-500 uppercase tracking-[0.3em] mb-2 block">
          What's Happening
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mb-3">
          Club Events
        </h1>
        <p className="text-charcoal-400 max-w-2xl">
          From wine tastings to multi-course dinners, our events bring the MBA community
          together around great food and drink. Seats are limited — don't miss out.
        </p>
      </div>

      {/* Events List */}
      {upcomingEvents.length > 0 ? (
        <div className="space-y-8">
          {upcomingEvents.map((event, i) => {
            const linkedRestaurant = event.restaurantId
              ? restaurants.find(r => r.id === event.restaurantId)
              : null;

            return (
              <div
                key={event.id}
                className="grid grid-cols-1 lg:grid-cols-5 gap-6 bg-charcoal-900 rounded-lg border border-charcoal-800/50 overflow-hidden"
              >
                {/* Image */}
                {event.imageUrl && (
                  <div className="lg:col-span-2">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`${event.imageUrl ? 'lg:col-span-3' : 'lg:col-span-5'} p-6 sm:p-8 flex flex-col justify-center`}>
                  {i === 0 && (
                    <span className="inline-block w-fit px-2.5 py-0.5 bg-burgundy-500/20 text-burgundy-300 text-[10px] uppercase tracking-widest rounded mb-3">
                      Next Up
                    </span>
                  )}

                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-cream-100 mb-3">
                    {event.title}
                  </h2>

                  <p className="text-charcoal-300 leading-relaxed mb-5 text-sm sm:text-base">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-cream-200">
                      <Calendar className="w-3.5 h-3.5 text-burgundy-500" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cream-200">
                      <Clock className="w-3.5 h-3.5 text-burgundy-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cream-200">
                      <MapPin className="w-3.5 h-3.5 text-burgundy-500" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {event.rsvpLink && (
                      <a
                        href={event.rsvpLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors"
                      >
                        RSVP
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {linkedRestaurant && (
                      <Link
                        to={`/restaurants/${linkedRestaurant.slug}`}
                        className="text-sm text-charcoal-400 hover:text-burgundy-300 transition-colors"
                      >
                        View restaurant &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-charcoal-400 text-lg mb-2">No upcoming events at the moment.</p>
          <p className="text-charcoal-500 text-sm">Check back soon — we're always planning something delicious.</p>
        </div>
      )}
    </div>
  );
}

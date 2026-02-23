import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Wine className="w-5 h-5 text-burgundy-500" />
              <span className="font-serif text-lg font-semibold text-cream-100">
                WSB Food & Wine
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs">
              The Wisconsin School of Business MBA Food & Wine Club — cultivating
              taste, community, and the art of dining well in Madison.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm text-cream-200 uppercase tracking-widest mb-4">
              Explore
            </h4>
            <div className="space-y-2.5">
              <Link to="/restaurants" className="block text-sm text-charcoal-400 hover:text-cream-100 transition-colors">
                Restaurants
              </Link>
              <Link to="/events" className="block text-sm text-charcoal-400 hover:text-cream-100 transition-colors">
                Club Events
              </Link>
              <Link to="/register" className="block text-sm text-charcoal-400 hover:text-cream-100 transition-colors">
                Join the Club
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm text-cream-200 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-2.5 text-sm text-charcoal-400">
              <p>Wisconsin School of Business</p>
              <p>975 University Ave</p>
              <p>Madison, WI 53706</p>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800/30 mt-10 pt-8 text-center">
          <p className="text-xs text-charcoal-500 tracking-wide">
            &copy; {new Date().getFullYear()} WSB MBA Food & Wine Club. Drink responsibly. Eat adventurously.
          </p>
        </div>
      </div>
    </footer>
  );
}

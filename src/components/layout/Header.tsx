import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wine, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/restaurants', label: 'Restaurants' },
    { to: '/events', label: 'Events' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <Wine className="w-6 h-6 text-burgundy-500 group-hover:text-burgundy-400 transition-colors" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg sm:text-xl font-semibold text-cream-100 tracking-wide">
                WSB Food & Wine
              </span>
              <span className="text-[10px] sm:text-xs text-charcoal-400 tracking-[0.2em] uppercase">
                MBA Club — Madison
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  isActive(link.to)
                    ? 'text-burgundy-500 font-medium'
                    : 'text-charcoal-300 hover:text-cream-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="ml-4 px-5 py-2 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 text-sm tracking-wide rounded transition-colors"
            >
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-charcoal-300 hover:text-cream-100 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-900 border-t border-charcoal-800/50">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm tracking-wide uppercase ${
                  isActive(link.to)
                    ? 'text-burgundy-500 font-medium'
                    : 'text-charcoal-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-2.5 mt-2 bg-burgundy-500 text-cream-50 text-sm tracking-wide rounded"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

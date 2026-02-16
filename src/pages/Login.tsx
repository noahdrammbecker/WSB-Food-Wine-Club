import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    alert('Authentication will be connected with Supabase. For now, this is a preview of the login flow.');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Wine className="w-8 h-8 text-burgundy-800 mx-auto mb-3" />
          <h1 className="font-serif text-3xl font-bold text-cream-100 mb-2">Welcome Back</h1>
          <p className="text-charcoal-400 text-sm">Sign in to leave reviews and RSVP for events.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-charcoal-900 rounded-lg border border-charcoal-800/50 p-6 sm:p-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-charcoal-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-800/50"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-charcoal-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              required
              className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-800/50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-burgundy-800 hover:bg-burgundy-700 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors mb-4"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-charcoal-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-burgundy-300 hover:text-burgundy-200 transition-colors">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

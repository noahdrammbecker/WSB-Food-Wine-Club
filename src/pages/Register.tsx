import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register:', { name, email, password });
    alert('Registration will be connected with Supabase. For now, this is a preview of the sign-up flow.');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Wine className="w-8 h-8 text-burgundy-500 mx-auto mb-3" />
          <h1 className="font-serif text-3xl font-bold text-cream-100 mb-2">Join the Club</h1>
          <p className="text-charcoal-400 text-sm">Create an account to rate restaurants, write reviews, and RSVP for events.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-charcoal-900 rounded-lg border border-charcoal-800/50 p-6 sm:p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm text-charcoal-300 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-500/50"
            />
          </div>

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
              className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-500/50"
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
              placeholder="Create a password"
              required
              minLength={8}
              className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-500/50"
            />
            <p className="text-xs text-charcoal-600 mt-1">Minimum 8 characters</p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors mb-4"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-charcoal-400">
            Already have an account?{' '}
            <Link to="/login" className="text-burgundy-300 hover:text-burgundy-200 transition-colors">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

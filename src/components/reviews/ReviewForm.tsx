import { useState } from 'react';
import { Camera } from 'lucide-react';
import StarRating from '../restaurants/StarRating';

interface ReviewFormProps {
  restaurantName: string;
  onSubmit: (review: { rating: number; title: string; body: string; visitDate: string }) => void;
}

export default function ReviewForm({ restaurantName, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visitDate, setVisitDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    onSubmit({ rating, title, body, visitDate });
    setRating(0);
    setTitle('');
    setBody('');
    setVisitDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal-900 rounded-lg border border-charcoal-800/50 p-6">
      <h3 className="font-serif text-xl font-semibold text-cream-100 mb-6">
        Review {restaurantName}
      </h3>

      {/* Rating */}
      <div className="mb-5">
        <label className="block text-sm text-charcoal-300 mb-2">Your Rating</label>
        <StarRating rating={rating} size="lg" interactive onRate={setRating} />
        {rating === 0 && (
          <p className="text-xs text-charcoal-500 mt-1">Click a star to rate</p>
        )}
      </div>

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="review-title" className="block text-sm text-charcoal-300 mb-2">
          Title
        </label>
        <input
          id="review-title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Summarize your experience"
          required
          className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-800/50"
        />
      </div>

      {/* Body */}
      <div className="mb-4">
        <label htmlFor="review-body" className="block text-sm text-charcoal-300 mb-2">
          Your Review
        </label>
        <textarea
          id="review-body"
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="What did you order? How was the atmosphere? Would you go back?"
          required
          rows={4}
          className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 placeholder-charcoal-600 focus:outline-none focus:border-burgundy-800/50 resize-none"
        />
      </div>

      {/* Visit Date */}
      <div className="mb-5">
        <label htmlFor="visit-date" className="block text-sm text-charcoal-300 mb-2">
          When did you visit?
        </label>
        <input
          id="visit-date"
          type="date"
          value={visitDate}
          onChange={e => setVisitDate(e.target.value)}
          className="w-full px-4 py-2.5 bg-charcoal-950 border border-charcoal-800/50 rounded text-sm text-cream-100 focus:outline-none focus:border-burgundy-800/50"
        />
      </div>

      {/* Photo Upload Placeholder */}
      <div className="mb-6">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 border border-dashed border-charcoal-700 rounded text-sm text-charcoal-400 hover:border-charcoal-500 hover:text-charcoal-300 transition-colors"
        >
          <Camera className="w-4 h-4" />
          Add Photos
        </button>
        <p className="text-xs text-charcoal-600 mt-1">Photo upload coming soon</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={rating === 0}
        className="w-full py-3 bg-burgundy-800 hover:bg-burgundy-700 disabled:bg-charcoal-800 disabled:text-charcoal-600 text-cream-50 text-sm font-medium tracking-wide rounded transition-colors"
      >
        Submit Review
      </button>
    </form>
  );
}

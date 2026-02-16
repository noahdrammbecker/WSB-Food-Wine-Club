import type { Review } from '../../types';
import StarRating from '../restaurants/StarRating';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formattedDate = new Date(review.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="py-6 border-b border-charcoal-800/30 last:border-b-0">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 rounded-full bg-burgundy-800/30 flex items-center justify-center">
              <span className="text-sm font-medium text-burgundy-300">
                {review.userName.charAt(0)}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-cream-200">{review.userName}</span>
              <span className="text-xs text-charcoal-500 ml-2">{formattedDate}</span>
            </div>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>

      <h4 className="font-serif text-base font-medium text-cream-100 mb-2">
        {review.title}
      </h4>
      <p className="text-sm text-charcoal-300 leading-relaxed">
        {review.body}
      </p>
      <p className="text-xs text-charcoal-500 mt-3">
        Visited {new Date(review.visitDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
    </div>
  );
}

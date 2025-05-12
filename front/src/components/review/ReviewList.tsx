import { useState } from "react";
import ReviewCard from "./ReviewCard";

interface IReview {
  id: string;
  username: string;
  date: string;
  rating: number;
  content: string;
}

interface IReviewListProps {
  reviews: IReview[];
  perPage?: number;
  showAll?: boolean;
}

const ReviewList = ({ reviews, perPage = 2 }: IReviewListProps) => {
  const [visibleCount, setVisibleCount] = useState(perPage);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;


  return (
    <div className="mt-10 space-y-10">
      {visibleReviews.map((r) => (
        <ReviewCard
          key={r.id}
          username={r.username}
          date={r.date}
          rating={r.rating}
          review={r.content}
        />
      ))}

      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setVisibleCount((v) => v + perPage)}
            className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
          >
            Load more reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;

interface IReview {
  id: string;
  username: string;
  date: string;
  rating: number;
  content: string;
};

interface IReviewListProps {
  reviews: IReview[];
};

const ReviewList = ({ reviews }: IReviewListProps) => {
  return (
    <div className="mt-10 space-y-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-black">@{review.username}</p>
              <p className="text-gray-400 text-sm">{review.date}</p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill={i < review.rating ? '#FBBF24' : '#E5E7EB'}
                >
                  <path d="M9.1 2.3C9.47 1.57 10.53 1.57 10.9 2.3L12.7 5.98C12.85 6.28 13.13 6.48 13.46 6.53L17.5 7.12C18.33 7.24 18.65 8.24 18.06 8.82L15.13 11.68C14.9 11.91 14.79 12.24 14.84 12.56L15.53 16.59C15.68 17.41 14.82 18.03 14.08 17.65L10.46 15.74C10.17 15.59 9.83 15.59 9.53 15.74L5.91 17.65C5.18 18.03 4.32 17.41 4.46 16.59L5.15 12.56C5.21 12.24 5.1 11.91 4.87 11.68L1.94 8.82C1.35 8.24 1.67 7.24 2.49 7.12L6.54 6.53C6.87 6.48 7.15 6.28 7.29 5.98L9.1 2.3Z" />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-gray-600 text-base leading-6">{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
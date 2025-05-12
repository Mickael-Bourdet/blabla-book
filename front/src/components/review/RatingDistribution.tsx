import { RatingBar } from './RatingBar';

// Exemple de données statiques pour l'instant
const ratings = [
  { stars: 5, percentage: 30, count: 30 },
  { stars: 4, percentage: 40, count: 40 },
  { stars: 3, percentage: 20, count: 20 },
  { stars: 2, percentage: 16, count: 16 },
  { stars: 1, percentage: 8, count: 8 },
];

export const RatingDistribution = () => {
  return (
    <div className="flex flex-col gap-4">
      {ratings.map((rating) => (
        <RatingBar
          key={rating.stars}
          stars={rating.stars}
          percentage={rating.percentage}
          count={rating.count}
        />
      ))}
    </div>
  );
};

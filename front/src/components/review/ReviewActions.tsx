import React from 'react';

export const ReviewActions: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end w-full">
      <button
        className="rounded px-6 py-4 bg-gray-800 font-semibold text-lg text-white text-center shadow-sm transition-all duration-300 hover:bg-gray-600 hover:shadow-gray-400"
        onClick={() => console.log('Write a review clicked')}
      >
        Laissez un avis
      </button>

      <button
        className="rounded px-6 py-4 bg-white font-semibold text-lg text-gray-700 text-center shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-gray-400"
        onClick={() => console.log('See all reviews clicked')}
      >
        Voir tout les avis
      </button>
    </div>
  );
};

interface IReviewActionsProps {
  onWriteClick?: () => void;
  onSeeAllClick?: () => void;
}

const ReviewActions = ({onWriteClick, onSeeAllClick,}: IReviewActionsProps) => {

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end w-full">
      <button
        className="rounded px-6 py-4 bg-gray-800 font-semibold text-lg text-white text-center shadow-sm transition-all duration-300 hover:bg-gray-600 hover:shadow-gray-400 cursor-pointer"
        onClick={onWriteClick}
      >
        Laissez un avis
      </button>

      <button
        className="rounded px-6 py-4 bg-white font-semibold text-lg text-gray-700 text-center shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-gray-400 cursor-pointer"
        onClick={onSeeAllClick}
      >
        Voir tout les avis
      </button>
    </div>
  );
};

export default ReviewActions;
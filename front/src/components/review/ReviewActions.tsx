interface IReviewActionsProps {
  onWriteClick?: () => void;
}

const ReviewActions = ({ onWriteClick }: IReviewActionsProps) => {

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-end w-full">
      <button
        className="rounded px-6 py-4 bg-gray-800 font-semibold text-lg text-white text-center shadow-sm transition-all duration-300 hover:bg-gray-600 hover:shadow-gray-400 cursor-pointer"
        onClick={onWriteClick}
      >
        Laissez un avis
      </button>
    </div>
  );
};

export default ReviewActions;
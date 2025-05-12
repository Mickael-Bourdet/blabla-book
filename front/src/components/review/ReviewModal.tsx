import ReactDOM from "react-dom";

interface IReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal = ({ isOpen, onClose }: IReviewModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed font-body inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-body rounded-lg p-6 w-full max-w-xl relative shadow-lg">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenu du formulaire */}
        <h2 className="text-2xl font-title font-bold mb-4 text-black">
          Laissez votre avis
        </h2>
        <form className="flex flex-col gap-4">
          {/* Placeholder pour les étoiles (non fonctionnel pour l'instant) */}
          <div className="text-gray-500">★ ★ ★ ★ ★</div>

          <input
            type="text"
            placeholder="Titre"
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg"
          />
          <textarea
            placeholder="Votre commentaire..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg h-32"
          ></textarea>

          <button
            type="submit"
            className="rounded px-6 py-4 bg-gray-800 font-semibold text-lg text-white text-center shadow-sm transition-all duration-300 hover:bg-gray-600 hover:shadow-gray-400 cursor-pointer"
          >
            Postez votre avis
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ReviewModal;
import React from 'react';
import ReactDOM from 'react-dom';

type ReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl relative shadow-lg">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenu du formulaire */}
        <h2 className="text-2xl font-bold mb-4 text-black">Write a Review</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg"
          />
          <textarea
            placeholder="Your review..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-lg h-32"
          ></textarea>

          {/* Placeholder pour les étoiles (non fonctionnel pour l'instant) */}
          <div className="text-gray-500">★ ★ ★ ★ ★</div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-700"
          >
            Postez votre avis
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

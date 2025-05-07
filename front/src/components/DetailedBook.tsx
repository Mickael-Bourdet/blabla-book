import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../@types";
import { getOneBook } from "../api/apiBooks";
import {
  addToMyReadLibrary,
  addToWishRead,
  deleteToMyReadLibrary,
  deleteToWishRead,
} from "../api/apiUser";
import { useErrorHandler } from "../utils/useErrorHandler";
import { toastSuccess } from "../utils/toast/toastSuccess";
import { useAuthStore } from "../utils/store/useAuthStore";

const BookDetail = () => {
  const { user } = useAuthStore();
  const userId = Number(user?.id);
  const { bookId } = useParams();
  const numericBookId = Number(bookId);
  const [book, setBook] = useState<IBook>();
  const [isRead, setIsRead] = useState(false);
  const [toRead, setToRead] = useState(false);
  const { handleError } = useErrorHandler();

  const handleAddRead = () => {
    addToMyReadLibrary(userId, numericBookId);
    if (toRead) {
      handleRemoveWishRead();
    }
    toastSuccess(`Le livre a bien été ajouté à la liste "lu"`);
    setIsRead(true);
    setToRead(false);
  };
  const handleRemoveRead = () => {
    deleteToMyReadLibrary(userId, numericBookId);
    toastSuccess(`Le livre a bien été enlevé de la liste "lu"`);
    setIsRead(false);
  };
  const handleWishRead = () => {
    addToWishRead(userId, numericBookId);
    if (isRead) {
      handleRemoveRead();
    }
    toastSuccess(`Le livre a bien été ajouté à la liste "à lire"`);
    setToRead(true);
    setIsRead(false);
  };
  const handleRemoveWishRead = () => {
    deleteToWishRead(userId, numericBookId);
    toastSuccess(`Le livre a bien été enlevé de la liste "à lire"`);
    setToRead(false);
  };

  useEffect(() => {
    const loadData = async () => {
      if (bookId) {
        try {
          const newBook = await getOneBook(Number.parseInt(bookId));
          setBook(newBook);
        } catch (error) {
          handleError(error);
        }
      }
    };

    loadData();
  }, [bookId]);

  if (!book) {
    return (
      <div className="text-center text-red-600 bg-red-100 p-4 rounded-md shadow-md">
        Livre non trouvé
      </div>
    );
  }

  return (
    <div className="md:ml-64">
      {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
      <section className="bg-beige-50 p-4 md:p-8">
        <div className="flex flex-row items-center md:flex-row  md:gap-8 mt-15">
          <img
            src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
            alt={`${book.title}`}
            className="w-30 mr-5 h-auto mb-4 md:w-60"
          />

          <div className="text-sm md:text-base max-w-xl">
            <p>
              <span className="font-semibold">Par</span> :{" "}
              {book.authors.map((auth) => auth.name).join(", ")}
            </p>

            <h1 className="text-lg font-bold mb-2">{book.title}</h1>

            <p>
              <span className="font-semibold">Catégorie</span> :{" "}
              {book.categories.map((cat) => cat.name).join(", ")}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Date de publication</span> :{" "}
              {book.published}
            </p>

            <p className="font-semibold mt-4 mb-1">Description :</p>
            <p>{book.description}</p>

            <div className="flex flex-col items-center gap-4 lg:flex -row  lmt-4 ml-30">
              <button
                onClick={!isRead ? handleAddRead : handleRemoveRead}
                className={`flex items-center gap-2 ${
                  isRead && !toRead
                    ? `bg-green-300 hover:bg-green-200 ${!toRead}`
                    : "bg-gray-300 hover:bg-gray-200"
                }  rounded px-10 py-2 cursor-pointer`}
              >
                <i
                  className={`${
                    isRead && !toRead
                      ? "fa-solid fa-square-check"
                      : "fa-solid fa-eye"
                  }`}
                ></i>
                <span>{`${isRead && !toRead ? "Lu" : "Non Lu"}`}</span>
              </button>
              <button
                onClick={!toRead ? handleWishRead : handleRemoveWishRead}
                className={`flex items-center gap-2 ${
                  toRead && !isRead
                    ? "bg-green-300 hover:bg-green-200"
                    : "bg-gray-300 hover:bg-gray-200"
                } rounded px-10 py-2 cursor-pointer`}
              >
                <i className="fa-solid fa-book-open-reader"></i>
                <span>À Lire</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetail;

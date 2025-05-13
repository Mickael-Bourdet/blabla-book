import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../@types";
import { getOneBook } from "../api/apiBooks";
import { addToMyReadLibrary, addToWishRead, deleteToMyReadLibrary, deleteToWishRead } from "../api/apiUser";
import { useErrorHandler } from "../utils/useErrorHandler";
import { toastSuccess, toastInfo, toastWarning } from "../utils/toast/toastSuccess";
import { useAuthStore } from "../utils/store/useAuthStore";

const BookDetail = () => {
  const { user } = useAuthStore();
  const userId = user?.id;
  const { bookId } = useParams();
  const numericBookId = Number(bookId);
  const [book, setBook] = useState<IBook>();
  const [isRead, setIsRead] = useState(false);
  const [toRead, setToRead] = useState(false);
  const { handleError } = useErrorHandler();
  
  // Vous devez être connecté pour pouvoir ajouter un livre à une de vos listes
  const handleAddRead = () => {
    if (!userId) {
      toastWarning(`Vous devez être connecté pour pouvoir ajouter un livre à une de vos listes.
   <div class="mt-4 text-center">
     <a href="/auth" class="text-blue-600 underline font-semibold hover:text-blue-800 transition">
       Se connecter
     </a>
   </div>`);
      return;
    }
    addToMyReadLibrary(numericBookId);
    if (toRead) {
      handleRemoveWishRead();
    }
    toastSuccess(`Le livre a bien été ajouté à la liste "lu"`);
    setIsRead(true);
    setToRead(false);
  };
  const handleRemoveRead = () => {
    deleteToMyReadLibrary(numericBookId);
    toastInfo(`Le livre a été enlevé de la liste "lu"`);
    setIsRead(false);
  };
  const handleWishRead = () => {
    if (!userId) {
      toastWarning(`Vous devez être connecté pour pouvoir ajouter un livre à une de vos listes.
   <div class="mt-4 text-center">
     <a href="/auth" class="text-blue-600 underline font-semibold hover:text-blue-800 transition">
       Se connecter
     </a>
   </div>`);
      return;
    }
    addToWishRead(numericBookId);
    if (isRead) {
      handleRemoveRead();
    }
    toastSuccess(`Le livre a bien été ajouté à la liste "à lire"`);
    setToRead(true);
    setIsRead(false);
  };
  const handleRemoveWishRead = () => {
    deleteToWishRead(numericBookId);
    toastInfo(`Le livre a été enlevé de la liste "à lire"`);
    setToRead(false);
  };

  useEffect(() => {
    const loadData = async () => {
      if (bookId) {
        try {
          const newBook = await getOneBook(numericBookId);
          setBook(newBook);

          const hasRead = newBook.users_has_read.some((user) => user.id === userId);
          const wantsToRead = newBook.users_need_to_read.some((user) => user.id === userId);
          setIsRead(hasRead);
          setToRead(wantsToRead);
        } catch (error) {
          handleError(error);
        }
      }
    };

    loadData();
  }, [bookId, userId]);

  if (!book) {
    return <div className="text-center text-red-600 bg-red-100 p-4 rounded-md shadow-md">Livre non trouvé</div>;
  }

  return (          
    <div className="bg-body flex flex-col p-4 items-center sm:flex-col ml:flex-row lg:ml-0 xl:ml-64 md:p-8 md:gap-8 mt-5 font-body tracking-wider [word-spacing:2px]">
      <img
        src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
        alt={`${book.title}`}
        className="w-30 mr-5 h-auto mb-4 md:w-60"
      />

      <div className="text-sm md:text-base max-w-xl">
        <p>
          <span className="font-bold font-title text:2xl">Par</span> :{" "}
          {book.authors.map((auth) => auth.name).join(", ")}
        </p>

        <h1 className="text-xl font-title font-bold mb-2">{book.title}</h1>

        <p>
          <span className="font-bold font-title">Catégorie</span> : {book.categories.map((cat) => cat.name).join(", ")}
        </p>

        <p className="mb-2">
          <span className="font-bold font-title">Date de publication</span> : {book.published}
        </p>

        <p className="font-bold mt-4 mb-1 font-title text-lg">Description :</p>
        <p>{book.description}</p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mt-4">
          <button
            onClick={!isRead ? handleAddRead : handleRemoveRead}
            className={`flex items-center gap-2 ${
              isRead && !toRead ? `bg-green-300 hover:bg-green-200 ${!toRead}` : "bg-gray-300 hover:bg-gray-200"
            }  rounded justify-center w-40 py-2 cursor-pointer`}
          >
            <i className={`${isRead && !toRead ? "fa-solid fa-square-check" : "fa-solid fa-square-xmark"}`}></i>
            <span>Lu</span>
          </button>
          <button
            onClick={!toRead ? handleWishRead : handleRemoveWishRead}
            className={`flex items-center gap-2 ${
              toRead && !isRead ? "bg-green-300 hover:bg-green-200" : "bg-gray-300 hover:bg-gray-200"
            } rounded justify-center w-40 py-2 cursor-pointer`}
          >
            <i className="fa-solid fa-book-open-reader"></i>
            <span>À Lire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

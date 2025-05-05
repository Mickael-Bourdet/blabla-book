import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "../@types";
import { getOneBook } from "../api/apiBooks";
import { addToMyReadLibrary, addToWishRead, deleteToMyReadLibrary, deleteToWishRead } from "../api/apiUser";
import { useErrorHandler } from "../useErrorHandler";

const BookDetail = () => {
  const { bookId } = useParams();
  const numericBookId = Number(bookId);
  const [book, setBook] = useState<IBook>();
  const [ isRead, setIsRead ] = useState(false);
  const [ toRead, setToRead ] = useState(false);
  const { handleError } = useErrorHandler();

  // TODO changer 1 par userId
  const handleAddRead = () => {
    addToMyReadLibrary(1, numericBookId);
    setIsRead(true);
  };
  const handleRemoveRead = () => {
    deleteToMyReadLibrary(1, numericBookId);
    setIsRead(false);
  }
  const handleWishRead = () => {
    addToWishRead(1, numericBookId);
    setToRead(true);
  };
  const handleRemoveWishRead = () => {
    deleteToWishRead(1, numericBookId);
    setToRead(false);
  }

  useEffect(() => {
    const loadData = async () => {
      if (bookId) {
        try {
          const newBook = await getOneBook(Number.parseInt(bookId));
          setBook(newBook);
        } catch (error) {
          // console.error("Erreur lors de la récupération du livre", error);
          handleError(error);
        }
      }
    };

    loadData();
  }, [bookId]);

  if (!book) {
    return <div className="text-center text-red-600 bg-red-100 p-4 rounded-md shadow-md">Livre non trouvé</div>;
  }

  return (
    <div className="md:ml-64">
      {" "}
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
              <span className="font-semibold">Par</span> : {book.authors.map((auth) => auth.name).join(", ")}
            </p>
            
            <h1 className="text-lg font-bold mb-2">{book.title}</h1>

            <p>
              <span className="font-semibold">Catégorie</span> : {book.categories.map((cat) => cat.name).join(", ")}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Date de publication</span> : {book.published}
            </p>

            <p className="font-semibold mt-4 mb-1">Description :</p>
            <p>{book.description}</p>

            <div className="flex gap-20 mt-4 ml-30">
              <button
                onClick={!isRead ? handleAddRead : handleRemoveRead}
                className={`flex items-center gap-2 ${isRead && !toRead ? `bg-green-300 hover:bg-green-200 ${!toRead}` : 'bg-gray-300 hover:bg-gray-200'}  rounded px-10 py-2 cursor-pointer`}
              >
                {/* <i className="fa-solid fa-book"></i> */}
                <i className="fa-solid fa-eye"></i>
                <span>{`${isRead && !toRead ? 'Lu' : 'Non Lu'}`}</span>
              </button>
              <button
                onClick={!toRead ? handleWishRead : handleRemoveWishRead}
                className={`flex items-center gap-2 ${ toRead && !isRead ? 'bg-green-300 hover:bg-green-200' : 'bg-gray-300 hover:bg-gray-200'} rounded px-10 py-2 cursor-pointer`}
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

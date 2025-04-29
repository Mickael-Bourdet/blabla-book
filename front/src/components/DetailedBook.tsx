import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { IBook } from "../@types";
import { getOneBook } from "../api";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook>();

  useEffect(() => {
    const loadData = async () => {
      if (bookId) {
        const newBook = await getOneBook(Number.parseInt(bookId));
        setBook(newBook);
      }
    };
    loadData();
  }, [bookId]);

  if (!bookId) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="md:ml-64">
      {" "}
      {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
      <section className="bg-beige-50 p-4 md:p-8">
        <div className="flex flex-row items-center md:flex-row  md:gap-8 mt-15">
          <img
            src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book?.cover_url}.jpg`}
            alt={`${book?.title}`}
            className="w-30 mr-5 h-auto mb-4 md:w-60"
          />

          <div className="text-sm md:text-base max-w-xl">
            <p className="text-gray-700 mb-1">
              Par {book?.authors.map((auth) => auth.name)}
            </p>
            <h1 className="text-lg font-bold mb-2">{book?.title}</h1>

            <p>
              <span className="font-semibold">Catégorie</span> :{" "}
              {book?.categories.map((cat) => cat.name)}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Date de publication</span> :{" "}
              {book?.published}
            </p>

            <p className="font-semibold mt-4 mb-1">Description :</p>
            <p>{book?.description}</p>

            <div className="flex gap-20 mt-4 ml-30">
              <button className="flex items-center gap-2 bg-gray-300 rounded px-10 py-2">
                <input type="checkbox" />
                <span>Lu</span>
              </button>
              <button className="flex items-center gap-2 bg-gray-300 rounded px-10 py-2">
                <input type="checkbox" />
                <span>a Lire</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetail;

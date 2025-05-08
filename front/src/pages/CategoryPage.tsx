import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, ICategoryBooks } from "../@types";
import { useErrorHandler } from "../utils/useErrorHandler";
import { getBooksByCategories } from "../api/apiBooks";

export default function CategoryPage() {
  const [booksCategories, setBooksCategories] = useState<ICategoryBooks[]>([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    async function loadBooks() {
      try {
        const booksByCategories = await getBooksByCategories();
        setBooksCategories(booksByCategories);
      } catch (error) {
        handleError(error);
      }
    }
    loadBooks();
    console.log(loadBooks());
  }, []);

  return (
    <div className="md:ml-64">
      {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
      <main className="p-4">
        <section className="content">
          <h2 className="text-xl mb-4 font-bold mt-[100px] ">{booksCategories.name}</h2>

          <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <Link to="/books/bookid" className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                <img
                  src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                  alt="Le Comte de Monte-Cristo - Dumas"
                  className="h-auto w-full object-cover mb-2"
                />
                <p>Le Comte de Monte-Cristo</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

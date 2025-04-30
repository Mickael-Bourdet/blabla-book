import { useState, useEffect } from "react";
import { IBooks } from "../@types";
import { getAllBooks } from "../api/apiBooks";

const Library = () => {
  const [books, setBooks] = useState<IBooks>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getAllBooks();
        setBooks(data);
        
      } catch (error) {
        console.error("Erreur lors de la récupération des livres", error)
      }
    }
    fetchBooks();
  }, []);

  return (
    <main className="p-4 bg-body">
      <div className="md:ml-64">      
      {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
        <section className="content">
          <h2 className="text-xl mb-4 font-bold">Tous Nos Livres</h2>
          <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {/* loop on books */}
            {books.map((book) => (
              <a href={`/books/${book.id}`} key={book.id} className="block">
                <div className="book cursor-pointer hover:shadow-lg hover:rounded-md transition-shadow text-center">
                  <img
                    src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                    alt={`${book.title}`}
                    className="h-95 w-auto object-cover mb-2"
                  />
                  <p>{book.title}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>    
    </main>
  );
};

export default Library;

import { useState, useEffect } from "react";
import { IBooks } from "../@types";
import { getAllBooks } from "../api/index"

const Library = () => {
  const [books, setBooks] = useState<IBooks>([]);

  useEffect(() => {
    async function fetchBooks() {
      const data = await getAllBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);
  
  return (
<>
     
  <div className="bg-nav-footer-50 font-sans mt-[100px]">
     
     
    {/* Contenu principal avec marge à gauche */}
    <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}    
      <main className="p-4 pb-20">
        <section className="content">
          
          <h2 className="text-xl mb-4 font-bold">Tous Nos Livres</h2>
          <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {/* loop on books */}
            {books.map((book) => 
            <a href={`/books/${book.id}`} key={book.id} className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md transition-shadow text-center">
                <img 
                  src={`https://metasbooks.fr/api/images/${book?.cover_url}-${book?.isbn}.jpg`}  
                  alt={`${book.title}`} 
                  className="h-95 w-auto object-cover mb-2" 
                />
                <p>{book.title}</p>
              </div>
            </a>
            )}
               
          </div>      
        </section>
      </main>
    </div>
  </div>
</>


)};

export default Library;
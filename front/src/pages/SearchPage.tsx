import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchBooks } from "../api/apiBooks"; 
import { IBook } from "../@types";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get("query") || "";
  const [results, setResults] = useState<IBook[]>([]);
  

  useEffect(() => {
    const fetchResults = async () => {
      const res = await searchBooks(searchTerm); // adapte à ton API
      setResults(res);
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  return (
<>
 {/* Contenu principal avec marge à gauche */}
      <div className="md:ml-64">
        {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
        <main className="p-4">
          <section className="content ml-[5vw] mr-[5vw] ">
            <h2 className="text-xl mt-8 mb-4 font-bold">Recommandations</h2>
         {results.length > 0 ? (
            <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3  lg:grid-cols-5">
            {results.map((book: any) => (
                
                  <a key={book.id} href={`/books/${book.id}`} className="block">
                    <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                      <img
                        src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                        alt={book.title}
                        className="h-80 w-full object-contain mb-2 mx-auto"
                      />
                      <p className="text-center">{book.title}</p>
                    </div>
                  </a>
                   ))}
          </div>
            ) : (
                <p>Aucun résultat trouvé.</p>
              )}
                
            
           

          </section>
        </main>
      </div>
      </>
  );
};

export default SearchPage;

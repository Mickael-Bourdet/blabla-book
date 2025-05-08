import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { searchBooks } from "../../api/apiBooks";
import { IBook, IAuthor } from "../../@types";

const SearchBar = () => {
  const [researchTerm, setResearch] = useState("");
  const [results, setResults] = useState<{ books: IBook[]; authors: IAuthor[] }>({ books: [], authors: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Ferme le menu déroulant si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gère la soumission du formulaire
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (researchTerm.trim()) {
      navigate(`/books?query=${encodeURIComponent(researchTerm.trim())}`);
      setResearch("");
      setIsDropdownOpen(false);
    }
  };

  // Gère le clic sur une suggestion
  const handleSuggestionClick = () => {
    setResearch("");
    setResults({ books: [], authors: [] });
    setIsDropdownOpen(false);
    setSearchPerformed(false);
  };

  // Gère la saisie dans le champ de recherche
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setResearch(value);
    setError(null);

    if (value.length > 2) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
      setSearchPerformed(false);
    }
  };

  // Effectue la recherche après un délai
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const fetchData = async () => {
      if (researchTerm.length > 2) {
        setIsLoading(true);
        setError(null);
        try {
          console.log(`Recherche pour: "${researchTerm}"`);
          const res = await searchBooks(researchTerm);
          console.log("Résultats:", res);
          setResults(res);
          setSearchPerformed(true);
        } catch (error) {
          console.error("Search error:", error);
          setError("Une erreur est survenue lors de la recherche");
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults({ books: [], authors: [] });
        setSearchPerformed(false);
      }
    };

    // Annule le timer précédent à chaque frappe
    if (researchTerm.length > 2) {
      timer = setTimeout(fetchData, 300);
    } else {
      setIsDropdownOpen(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [researchTerm]);

  // Détermine si des résultats sont disponibles
  const hasResults = results.books.length > 0 || results.authors.length > 0;

  // Contenu du dropdown menu
  const renderDropdownContent = () => {
    if (isLoading) {
      return <div className="px-3 py-4 text-center">Recherche en cours...</div>;
    }

    if (error) {
      return (
        <div className="px-3 py-4 text-center">
          <div className="text-red-500 mb-2">{error}</div>
          <div className="text-sm text-gray-500">Veuillez réessayer plus tard</div>
        </div>
      );
    }

    if (searchPerformed && !hasResults) {
      return <div className="px-3 py-4 text-center">Aucun résultat trouvé pour "{researchTerm}"</div>;
    }

    if (hasResults) {
      return (
        <ul>
          {/* Section des livres */}
          {results.books.length > 0 && (
            <>
              <li className="px-3 py-1 text-gray-500 text-xs uppercase font-semibold bg-gray-50 sticky top-0">
                Livres ({results.books.length})
              </li>
              {results.books.map((book) => (
                <li key={`book-${book.id}`} className="p-2 hover:bg-gray-100 text-sm border-b border-gray-100">
                  <Link to={`/books/${book.id}`} onClick={handleSuggestionClick} className="block">
                    <span className="font-medium">{book.title}</span>
                    {book.author && <span className="text-gray-500 ml-2">par {book.author.name}</span>}
                  </Link>
                </li>
              ))}
            </>
          )}

          {/* Section des auteurs */}
          {results.authors.length > 0 && (
            <>
              <li className="px-3 py-1 text-gray-500 text-xs uppercase font-semibold bg-gray-50 sticky top-0">
                Auteurs ({results.authors.length})
              </li>
              {results.authors.map((author) => (
                <li key={`author-${author.id}`} className="p-2 hover:bg-gray-100 text-sm border-b border-gray-100">
                  <Link to={`/authors/${author.id}`} onClick={handleSuggestionClick} className="block">
                    {author.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      );
    }

    return null;
  };

  return (
    <div className="search-bar text-gray-500 ml-10 relative w-90 hidden md:block" ref={searchRef}>
      <form onSubmit={handleSearch} className="flex gap-2">
        <button type="submit" className={`absolute left-3 top-1/2 -translate-y-1/2 ${error ? "text-red-500" : ""}`}>
          <i className={`fas ${error ? "fa-exclamation-circle" : "fa-search"}`}></i>
        </button>
        <input
          type="text"
          value={researchTerm}
          placeholder="Chercher un livre et/ou un auteur"
          onChange={handleInputChange}
          onFocus={() => researchTerm.length > 2 && setIsDropdownOpen(true)}
          className={`border rounded px-3 py-2 w-full pl-10 ${error ? "border-red-300 bg-red-50" : ""}`}
        />
      </form>

      {isDropdownOpen && (
        <div className="absolute bg-white border border-gray-200 rounded-md mt-1 w-full max-h-80 overflow-auto shadow-lg z-10">
          {renderDropdownContent()}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

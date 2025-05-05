import { useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { searchBooks } from "../../api/apiBooks";
import { IBook } from "../../@types";



const SearchBar = () => {
  const [researchTerm, setResearch] = useState("");
  const [results, setResults] = useState<IBook[]>([]);
  const navigate = useNavigate();


  // fonction pour gerer la page des resultats de recherche
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (researchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(researchTerm.trim())}`);// renvoi vers la page des resultats a la soummission du formulaire
      setResearch("");
    }
  };

 //fonction pour reset la bar de recherche apres avoir clicquer sur une suggestion   
   const handleSuggestionClick = () => {
    setResearch(""); 
    setResults([]); 
  };


//fonction qui effectue un appel a l'api afin de proposer des suggestions 
  useEffect(() => {
    const fetchData = async () => {
        // si la recherche fais plus de 2 caractezres on commence a chercher dans la bdd
      if (researchTerm.length > 2) { 
        const res = await searchBooks(researchTerm);
        setResults(res);
      } else {
        setResults([]);
      }
    };

    const timer = setTimeout(fetchData, 300); 
    return () => clearTimeout(timer);
  }, [researchTerm]);

  return (
    <div className="search-bar text-gray-500 ml-10 relative w-70 hidden md:block">
      <form onSubmit={handleSearch} className="flex gap-2">
        <button type="submit">
          <i className="fas fa-search absolute left-3 -translate-y-1/2"></i>
        </button>
        <input
          type="text"
          value={researchTerm}
          placeholder="Chercher un livre"
          onChange={(e) => setResearch(e.target.value)}
          className="border rounded px-3 py-2 w-full pl-10"
        />
      </form>

      {results.length > 0 && (
        <ul className="absolute bg-white border border-gray-200 rounded-md mt-1 w-full max-h-60 overflow-auto shadow-lg z-10 ">
          {results.map((book) => (
            <li key={book.id} className="p-2 hover:bg-gray-100 text-sm">
              <Link to={`/books/${book.id}`} onClick={handleSuggestionClick} >{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;


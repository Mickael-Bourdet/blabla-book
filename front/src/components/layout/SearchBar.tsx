// import { useState } from "react";

// const SearchBar = () => {
//     return (
//       <>
        
//             <div className="search-bar relative w-64 hidden md:block">
//               <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2  ml-8 "></i>
//               <input type="text" placeholder="Chercher un livre" className=" px-4 py-2 pl-10 border rounded-md ml-8 " />
//             </div>
            
//       </>
//     );
//   };
  
//   export default SearchBar;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [researchTerm, setResearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (researchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(researchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Rechercher un livre ou un auteur"
        value={researchTerm}
        onChange={(e) => setResearch(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
      <button type="submit" className="border px-4 py-2 rounded">
        Rechercher
      </button>
    </form>
  );
};

export default SearchBar;


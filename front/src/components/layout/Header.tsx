import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  
  return ( 
   <>
      <div className="flex ml-0 sticky top-0 z-10">
        {/* La marge à gauche de 64 pour faire de la place à la Sidebar mais elle prend toute la place quand celle-ci disparait */}
        <header className="bg-header flex items-center justify-between p-4 left-0 w-full pl-64 backdrop-blur-sm transition-all">
          <div className="logo flex items-center gap-2 md:hidden">
            <img src="./blablabook.webp" alt="BlaBlaBook" className="w-30" />
            <h1 className="text-xl">BlaBlaBook</h1>
          </div>
          <SearchBar />
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-blue-600">
              <i className="fa-solid fa-house-chimney"></i>
              <span className="whitespace-nowrap hidden xl:inline"> Accueil</span>
            </Link>
            <Link to="/library" className="hover:text-blue-600">
              <i className="fa-solid fa-book"></i>
              <span className="whitespace-nowrap hidden xl:inline"> Bibliothèque</span>
            </Link>
            <Link to="/auth" className="hover:text-blue-600">
              <i className="fa-solid fa-user"></i>
              <span className="hidden xl:inline"> Mon compte</span>
            </Link>
          </nav>
          <div className="block hover:text-blue-600 md:hidden">
            <i className="fas fa-search search-mobile text-xl"></i>
          </div>
        </header>
    
        {/* Navigation mobile */}
        <div className="fixed bottom-0 left-0 w-full bg-stone-300 flex justify-around p-4 z-10 rounded-t md:hidden">
          <Link to="/" className="hover:text-blue-600 flex flex-col items-center text-sm">
            <i className="fa-solid fa-house-chimney"></i> Accueil
          </Link>
          <Link to="/library" className="hover:text-blue-600 flex flex-col items-center text-sm">
            <i className="fa-solid fa-book"></i> Bibliothèque
          </Link>
          <Link to="/auth" className="hover:text-blue-600 flex flex-col items-center text-sm">
            <i className="fa-solid fa-user"></i> Mon compte
          </Link>
        </div>
      </div>
    </>
  )}

export default Header;

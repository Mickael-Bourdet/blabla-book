import { Link } from "react-router-dom";
import { useAuthStore } from "../../utils/store/useAuthStore";
import SearchBar from "./SearchBar";

const Header = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex ml-0 sticky top-0 z-10">
      <header className="bg-header flex items-center justify-between p-4 left-0 w-full md:pl-64 backdrop-blur-sm transition-all">
        <div className="logo flex items-center gap-2 md:hidden">
          <img src="/blablabook.webp" alt="BlaBlaBook" className="h-[10vw]" />
          <h1 className="text-xl">BlaBlaBook</h1>
        </div>

        <SearchBar />

        <nav className="hidden md:flex gap-6">
          <Link className="hover:text-blue-600" to="/">
            <i className="fa-solid fa-house-chimney"></i>
            <span className="whitespace-nowrap hidden xl:inline"> Accueil</span>
          </Link>
          <Link className="hover:text-blue-600" to="/library">
            <i className="fa-solid fa-book"></i>
            <span className="whitespace-nowrap hidden xl:inline"> Bibliothèque</span>
          </Link>

          {!user ? (
            <Link className="hover:text-blue-600" to="/auth">
              <i className="fa-solid fa-user"></i>
              <span className="hidden xl:inline"> Mon compte</span>
            </Link>
          ) : (
            <Link className="hover:text-blue-600" to="/profile">
              <i className="fa-solid fa-user"></i>
              <span className="hidden xl:inline"> {user.name}</span>
            </Link>
          )}
        </nav>

        <div className="block hover:text-blue-600 md:hidden">
          <i className="fas fa-search search-mobile text-xl"></i>
        </div>
      </header>

      {/* Navigation mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-stone-300 flex justify-around p-4 z-10 rounded-t md:hidden ">
        <Link
          to="/"
          className="hover:text-blue-600 flex flex-col items-center text-sm"
        >
          <i className="fa-solid fa-house-chimney"></i> Accueil
        </Link>
        <Link
          to="/library"
          className="hover:text-blue-600 flex flex-col items-center text-sm"
        >
          <i className="fa-solid fa-book"></i> Bibliothèque
        </Link>

        {/* Application de la même condition pour la version mobile */}
        {!user ? (
          <Link
            to="/auth"
            className="hover:text-blue-600 flex flex-col items-center text-sm"
          >
            <i className="fa-solid fa-user"></i>
            Mon compte
          </Link>
        ) : (
          <Link
            to="/profile"
            className="hover:text-blue-600 flex flex-col items-center text-sm"
          >
            <i className="fa-solid fa-user"></i>
            {user.name}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

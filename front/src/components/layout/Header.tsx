import { Link } from "react-router-dom";
import { useAuthStore } from "../../utils/store/useAuthStore";
import SearchBar from "./SearchBar";

const Header = () => {
  const { user } = useAuthStore();

  return (
    <div className="flex ml-0 sticky top-0 z-10">
      <header className="bg-header flex items-center gap-4 justify-between p-4 left-0 w-full md:pl-64 md:px-20 backdrop-blur-sm transition-all font-title">
        <div className=" flex  items-center  md:hidden ">
          <img src="/blablabook.webp" alt="BlaBlaBook" className="h-[6vw]  " />
          <h1 className="text-lg font-black font-title">BlaBlaBook</h1>
        </div>

        <SearchBar />

        <nav className="hidden md:flex gap-8">
          <Link className="hover:text-red-900 " to="/">
            <i className="fa-solid fa-house-chimney text-xl xl:text-base"></i>
            <span className="whitespace-nowrap hidden xl:inline"> Accueil</span>
          </Link>
          <Link className="hover:text-blue-800" to="/library">
            <i className="fa-solid fa-book text-xl xl:text-base"></i>
            <span className="whitespace-nowrap hidden xl:inline"> Bibliothèque</span>
          </Link>

          {!user ? (
            <Link className="hover:text-blue-600" to="/auth">
              <i className="fa-solid fa-user text-xl xl:text-base"></i>
              <span className="hidden xl:inline"> Mon compte</span>
            </Link>
          ) : (
            <Link className="hover:text-yellow-700 " to="/profile">
              <i className="fa-solid fa-user text-xl"></i>
              <span className="hidden xl:inline"> {user.name}</span>
            </Link>
          )}
        </nav>

        {/* Categories search */}
        <Link to="/CategoryPage" className="block md:hidden pr-4 ">
          <i className="fa-solid fa-sliders text-2xl text-placeholder"></i>
        </Link>
      </header>

      {/* Navigation mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-body border-t-1 border-placeholder flex justify-around p-4 z-10 rounded-t md:hidden font-title ">
        <Link to="/" className="hover:text-blue-600 flex flex-col items-center text-sm">
          <i className="fa-solid fa-house-chimney"></i> Accueil
        </Link>
        <Link to="/library" className="hover:text-blue-600 flex flex-col items-center text-sm">
          <i className="fa-solid fa-book"></i> Bibliothèque
        </Link>

        {/* Application de la même condition pour la version mobile */}
        {!user ? (
          <Link to="/auth" className="hover:text-blue-600 flex flex-col items-center text-sm">
            <i className="fa-solid fa-user"></i>
            Mon compte
          </Link>
        ) : (
          <Link to="/profile" className="hover:text-blue-600 flex flex-col items-center text-sm">
            <i className="fa-solid fa-user"></i>
            {user.name}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

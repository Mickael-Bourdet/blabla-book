import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <div className=" flex-1 ml-0 md:ml-64 sticky top-0">
        {" "}
        {/* La marge à gauche de 64 pour faire de la place à la Sidebar mais elle prend toute la place quand celle ci disparait */}
        <header className="bg-header flex items-center justify-between p-4 left-0 w-full pl-64 backdrop-blur-sm transition-all">
          <div className="logo flex items-center gap-2 mb-10 md:hidden">
            <img src="./blablabook.webp" alt="BlaBlaBook" className="w-30" />
            <h1 className="text-xl">BlaBlaBook</h1>
          </div>
         <SearchBar />
          <nav className="hidden md:flex gap-6 ">
            <a href="/">
              <i className="fa-solid fa-house-chimney"></i>{" "}
              <span className="whitespace-nowrap hidden xl:inline">Accueil</span>
            </a>
            <a href="/library">
              <i className="fa-solid fa-book"></i>
              <span className="whitespace-nowrap hidden xl:inline">Bibliothèque</span>{" "}
            </a>
            <a href="/auth">
              <i className="fa-solid fa-user"></i>
              <span className="hidden xl:inline">Mon compte</span>{" "}
            </a>
          </nav>
          <div className="block md:hidden">
            <i className="fas fa-search search-mobile text-xl"></i>
          </div>
        </header>
        {/* Navigation mobile */}
        <div className="fixed bottom-0 left-0 w-full bg-stone-300 flex justify-around p-4  z-10 md:hidden">
          <a href="/" className="flex flex-col items-center text-sm">
            <i className="fa-solid fa-house-chimney"></i> Accueil
          </a>
          <a href="/books" className="flex flex-col items-center  text-sm">
            <i className="fa-solid fa-book"></i> Bibliothèque
          </a>
          <a href="/login" className="flex flex-col items-center  text-sm">
            <i className="fa-solid fa-user"></i> Mon compte
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

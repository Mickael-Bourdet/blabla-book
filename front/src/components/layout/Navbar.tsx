import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <div>
        {/* Conteneur principal avec Flexbox */}
        <div className="flex">
          {/* Sidebar fixe à gauche */}
          <aside className="hidden md:block bg-sidebar p-4 w-64 fixed h-screen z-20 overflow-y-auto">
          <Link to="/" >
            <div className="logo flex items-center gap-2 mb-10">
              <Link to="/" className="flex items-center">
                <img src="/blablabook.webp" alt="BlaBlaBook" className="w-20" />
                <h1 className="text-xl font-black font-title">BlaBlaBook</h1>
              </Link>
            </div>
            </Link>
            <h2 className="text-lg mb-4">Genres</h2>
            <ul>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Romance
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Thriller
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Fantaisie
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Science-fiction
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Développement personnel
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Biographie
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Jeunesse
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Manga
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Bande dessinée
                </Link>
              </li>
              <li>
                <Link to="#" className="block text-gray-800 hover:text-blue-600 mb-2">
                  Classique
                </Link>
              </li>
            </ul>
          </aside>

          {/* Contenu principal avec la Navbar */}
        </div>
      </div>
    </>
  );
};

export default Navbars;

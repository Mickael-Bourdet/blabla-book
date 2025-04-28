const Navbars = () => {
  return (
    <>
      <div>
        {/* Conteneur principal avec Flexbox */}
        <div className="flex">
          {/* Sidebar fixe à gauche */}
          <aside className="hidden md:block bg-blue-200 p-4 w-64 fixed h-screen z-20 overflow-y-auto">
            <div className="logo flex items-center gap-2 mb-10">
              <img src="logo.png" alt="BlaBlaBook" className="w-8" />
              <h1 className="text-xl">BlaBlaBook</h1>
            </div>
            <h2 className="text-lg mb-4">Genres</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Romance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Thriller
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Fantaisie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Science-fiction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Développement personnel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Biographie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Jeunesse
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Manga
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Bande dessinée
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-blue-600 mb-2"
                >
                  Classique
                </a>
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

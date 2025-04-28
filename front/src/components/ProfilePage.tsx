import React from "react";

const ProfilePage = () => {
  return (
    <div className="p-4 md:ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">NOM DU PROFIL</h1>
        <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
          Modifier le profil
        </button>
      </div>

      {/* Section Mes livres lus */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Mes livres lus : 5</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Chaque livre */}
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
        </div>
      </section>

      {/* Section Mes livres à lire */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Mes livres à lire : 25</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
          <a href="/books/bookid" className="block">
            <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
              <img
                src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg"
                alt="Le Comte de Monte-Cristo - Dumas"
                className="h-auto w-full object-cover mb-2"
              />
              <p>Le Comte de Monte-Cristo</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

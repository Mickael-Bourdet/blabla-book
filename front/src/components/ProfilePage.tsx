import { useEffect, useState } from "react";
import { getOneUser } from "../api/apiBooks";
import type { IUser } from "../@types";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
  return (
    <div className="p-4 md:ml-64">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
          Modifier le profil
        </button>
      </div>

      {/* Livres lus */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Mes livres lus : {user.books_already_read.length}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {user.books_already_read.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <div className="hover:shadow-lg rounded-md transition-shadow">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="w-full h-64 object-cover mb-2 rounded"
                />
                <p className="text-center">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Livres à lire */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Mes livres à lire : {user.books_wish_read.length}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {user.books_wish_read.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <div className="hover:shadow-lg rounded-md transition-shadow">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="w-full h-64 object-cover mb-2 rounded"
                />
                <p className="text-center">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

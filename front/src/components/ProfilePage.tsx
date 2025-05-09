import { useEffect, useState } from "react";
import { getOneUser } from "../api/apiUser";
import type { IUser } from "../@types/index.d.ts";
import { Link } from "react-router-dom";
import { useAuthStore } from "../utils/store/useAuthStore";

const ProfilePage = () => {
  const [localUser, setLocalUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user } = useAuthStore();

  useEffect(() => {
    async function fetchUser() {
      if (!user?.id) {
        setError("Utilisateur non connecté");
        setLoading(false);
        return;
      }

      try {
        const userData = await getOneUser();
        if (!userData) {
          setError("Impossible de charger le profil.");
          return;
        }
        setLocalUser(userData);
      } catch (err) {
        setError("Impossible de charger le profil.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <p className="text-center">Chargement de votre profil...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!localUser) return null;

  return (
    <div className="pt-8 content ml-[5vw] mr-[5vw]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold font-title">{user?.name}</h1>
        <Link to={`/user/settings`} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
          Modifier le profil
        </Link>
      </div>

      {/* Livres lus */}
      <section className="pb-4 md:pb-8">
        <h2 className="text-2xl font-semibold mb-4 font-title">
          Mes livres lus : {localUser.books_already_read.length}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {localUser.books_already_read.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`} className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="h-80 w-full object-contain mb-2 mx-auto"
                />
                <p className="text-center text-lg font-body [word-spacing:2px] tracking-wider">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Livres à lire */}
      <section className="pb-20 md:pb-8">
        <h2 className="text-2xl mb-4 font-bold font-title">Mes livres à lire : {localUser.books_wish_read.length}</h2>
        <div className="book-list grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {localUser.books_wish_read.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`} className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="h-80 w-full object-contain mb-2 mx-auto"
                />
                <p className="text-center text-lg font-body [word-spacing:2px] tracking-wider">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;

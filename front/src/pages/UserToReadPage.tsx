import { useEffect, useState } from "react";
import { getOneUser } from "../api/apiUser";
import type { IUser } from "../@types/index.d.ts";
import { Link } from "react-router-dom";
import { useAuthStore } from "../utils/store/useAuthStore";

const UserToReadPage = () => {
  const { user } = useAuthStore();
  const [localUser, setLocalUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          setError("Impossible de charger les livres à lire.");
          return;
        }
        setLocalUser(userData);
      } catch (err) {
        setError("Erreur lors du chargement des livres à lire.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [user]);

  if (loading) return <p className="text-center mt-10">Chargement de ta liste de lecture...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!localUser) return null;

  return (
    <section className="content ml-[5vw] mr-[5vw] pt-10 pb-20">
      <h1 className="text-3xl font-bold font-title mb-6 ">
      Mes livres à lire : {localUser.books_wish_read.length}
      </h1>

      {localUser.books_wish_read.length === 0 ? (
        <p className="text-lg font-body">Tu n’as encore rien ajouté à ta liste de lecture.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {localUser.books_wish_read.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`} className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md transition-shadow text-center">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="h-80 w-full object-contain mb-2 mx-auto"
                />
                <p className="text-lg font-body tracking-wider">{book.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link
          to="/profile"
          className="block text-gray-800 hover:text-yellow-700 hover:underline mb-2 font-body tracking-widest"
        >
          ← Retour au profil
        </Link>
      </div>
    </section>
  );
};

export default UserToReadPage;

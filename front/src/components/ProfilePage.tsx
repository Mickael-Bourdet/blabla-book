import { popularBooks } from "../data/popularBooks";
import { recommendedBooks } from "../data/recommendedBooks";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">NOM DU PROFIL</h1>
        
        <Link to="/user/1/settings"><button  className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
          Modifier le profil
        </button></Link>
      </div>

      {/* Livres lus */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Mes livres lus : {popularBooks.length}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularBooks.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`} className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="h-100 w-full object-cover mb-2"
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
          Mes livres à lire : {recommendedBooks.length}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {recommendedBooks.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`} className="block">
              <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                <img
                  src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                  alt={book.title}
                  className="h-100 w-full object-cover mb-2"
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

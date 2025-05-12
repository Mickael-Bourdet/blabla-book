import { recommendedBooks } from "../data/recommendedBooks";
import { Link } from "react-router-dom";

const RecommendedBooks = () => {
  return (
    <section className="content ml-[5vw] mr-[5vw] pb-20 md:pb-8">
      <h2 className="text-3xl mt-8 mb-4 font-bold font-title">Recommandations</h2>
      <div className="book-list grid grid-cols-2 gap-6 sm:grid-cols-3  lg:grid-cols-5">
        {recommendedBooks.map((book) => {
          return (
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
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedBooks;

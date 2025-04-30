import { recommendedBooks } from "../data/recommendedBooks";

const RecommendedBooks = () => {
  return (
    <div className="md:ml-64">
      {" "}
        <section className="content">
          <h2 className="text-xl mt-8 mb-4 font-bold">Recommandations</h2>
          <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {recommendedBooks.map((book) => {
              return (
                <a key={book.id} href={`/books/${book.id}`} className="block">
                  <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                    <img
                      src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${book.cover_url}.jpg`}
                      alt={book.title}
                      className="h-100 w-full object-cover mb-2"
                    />
                    <p>{book.title}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
    </div>
  );
};

export default RecommendedBooks;

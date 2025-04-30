import { recommendedBooks } from "../data/recommendedBooks";

const RecommendedBooks = () => {
  return (
    <>
      {/* Contenu principal avec marge à gauche */}
      <div className="">
        {" "}
        {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
        <main className="p-4">
          <section className="content">
            <h2 className="text-xl mt- mb-4 font-bold">Recommandations</h2>
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
                      <p className="text-center">{book.title}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RecommendedBooks;

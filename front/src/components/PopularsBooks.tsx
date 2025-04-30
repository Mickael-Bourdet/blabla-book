import { popularBooks } from "../data/popularBooks";

const PopularBooks = () => {
  return (
    <>
      <div className="md:ml-64">
        {" "}
        {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
        <main className="p-4">
          <section className="content ml-[5vw] mr-[5vw]">
            <h2 className="text-xl mb-4 font-bold ">Livres populaires</h2>
            <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {popularBooks.map((popularBook) => {
                return (
                  <a key={popularBook.id} href={`/books/${popularBook.id}`} className="block">
                    <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                      <img
                        src={`https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/${popularBook.cover_url}.jpg`}
                        alt={popularBook.title}
                        className="h-80 w-100 object-contain mb-2 mx-auto"
                      />
                       <p className="text-center"> {popularBook.title} </p>
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

export default PopularBooks;

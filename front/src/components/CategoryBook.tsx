

const CategoryBook = () => {
    return (
      <>
  
         
          <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
            
            
            <main className="p-4">
              <section className="content">
               
  
                <h2 className="text-xl mb-4 font-bold mt-[100px] ">Nom de Categorie</h2>
                <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
               

            <a href="/books/bookid" className="block">
                <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                     <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" alt="Le Comte de Monte-Cristo - Dumas" className="h-auto w-full object-cover mb-2" />
                     <p>Le Comte de Monte-Cristo</p>
                </div>
            </a>
            <a href="/books/bookid" className="block">
                <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                     <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" alt="Le Comte de Monte-Cristo - Dumas" className="h-auto w-full object-cover mb-2" />
                     <p>Le Comte de Monte-Cristo</p>
                </div>
            </a>
            <a href="/books/bookid" className="block">
                <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                     <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" alt="Le Comte de Monte-Cristo - Dumas" className="h-auto w-full object-cover mb-2" />
                     <p>Le Comte de Monte-Cristo</p>
                </div>
            </a>
            <a href="/books/bookid" className="block">
                <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                     <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" alt="Le Comte de Monte-Cristo - Dumas" className="h-auto w-full object-cover mb-2" />
                     <p>Le Comte de Monte-Cristo</p>
                </div>
            </a>
            <a href="/books/bookid" className="block">
                <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
                     <img src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" alt="Le Comte de Monte-Cristo - Dumas" className="h-auto w-full object-cover mb-2" />
                     <p>Le Comte de Monte-Cristo</p>
                </div>
            </a>
                </div>
                
              </section>
            </main>
            
          </div>
          
       
        
      </>
    );
  };
  
  export default CategoryBook ;
  
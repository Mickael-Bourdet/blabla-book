

const Reco = () => {
    return (
      <>
  
          {/* Contenu principal avec marge à gauche */}
          <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
            
            
            <main className="p-4">
              <section className="content">
            
                <h2 className="text-xl mt-8 mb-4 font-bold">Recommandations</h2>
                <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <a href="/books/bookid" className="block">
  <div className="book cursor-pointer hover:shadow-lg hover:rounded-md hover:transition-shadow">
    <img 
      src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" 
      alt="Le Comte de Monte-Cristo - Dumas" 
      className="h-95 w-auto object-cover mb-2" 
    />
    <p>Le Comte de Monte-Cristo</p>
  </div>
</a>
                  <div className="book text-center">
                    <img 
                      src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" 
                      alt="Harry Potter à l'école des sorciers" 
                      className="h-95 w-auto object-cover mb-2"
                    />
                    <p>Harry Potter à l'école des sorciers</p>
                  </div>
                  <div className="book text-center">
                    <img 
                      src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" 
                      alt="Harry Potter à l'école des sorciers" 
                      className="h-95 w-auto object-cover mb-2"
                    />
                    <p>Harry Potter à l'école des sorciers</p>
                  </div>
                  <div className="book text-center">
                    <img 
                      src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" 
                      alt="Harry Potter à l'école des sorciers" 
                      className="h-95 w-auto object-cover mb-2"
                    />
                    <p>Harry Potter à l'école des sorciers</p>
                  </div>
                  <div className="book text-center">
                    <img 
                      src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" 
                      alt="Harry Potter à l'école des sorciers" 
                      className="h-95 w-auto object-cover mb-2"
                    />
                    <p>Harry Potter à l'école des sorciers</p>
                  </div>
                </div>
              </section>
            </main>
            
          </div>
          
       
        
      </>
    );
  };
  
  export default Reco;
  


const PopularBooks = () => {
    return (
      <>
  
         
          <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
            
            
            <main className="p-4">
              <section className="content">
               
  
                <h2 className="text-xl mb-4 font-bold mt-[100px] ">Livres populaires</h2>
                <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <a href="/books/bookid" className="block">
                  <div className="book text-center cursor-pointer hover:shadow-lg hover:rounded-md transition-shadow">
                      
                    <img 
                      src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" 
                      alt="Harry Potter à l'école des sorciers" 
                      className="h-auto w-full object-cover mb-2" 
                    />
                    <p>Harry Potter à l'école des sorciers</p>
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
  
  export default PopularBooks;
  
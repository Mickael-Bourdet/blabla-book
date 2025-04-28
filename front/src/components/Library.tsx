
const Library = () => {
    return (
<>
     
<div className="bg-nav-footer-50 font-sans mt-[100px]">
     
     
       {/* Contenu principal avec marge à gauche */}
       <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
         
         
         <main className="p-4 pb-20">
           <section className="content">
            

             <h2 className="text-xl mb-4 font-bold">Tout Nos Livres</h2>
             <div className="book-list grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
             <a href="/books/bookid" className="block">
  <div className="book cursor-pointer hover:shadow-lg hover:rounded-md transition-shadow">
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
                    src="https://m.media-amazon.com/images/I/91OINeHnJGL.jpg" 
                    alt="To Kill a Mockingbird" 
                    className="h-95 w-auto object-cover mb-2" 
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                     src="https://m.media-amazon.com/images/I/81AfzrYJcSL.jpg" 
                     alt="L'Alchimiste - Paulo Coelho" 
                     className="h-95 w-auto object-cover mb-2"
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                        src="https://m.media-amazon.com/images/I/71g2ednj0JL.jpg" 
                        alt="Les Misérables - Victor Hugo" 
                        className="h-95 w-auto object-cover mb-2"   
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                      src="https://m.media-amazon.com/images/I/81gepf1eMqL.jpg" 
                      alt="Pride and Prejudice - Jane Austen" 
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
                  src="https://m.media-amazon.com/images/I/71KilybDOoL.jpg" 
                  alt="Le Petit Prince" 
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
                  src="https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg" 
                  alt="Le Seigneur des Anneaux" 
                  className="h-95 w-auto object-cover mb-2" 
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                   src="https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg" 
                   alt="1984 de George Orwell" 
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
                       src="https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg" 
                       alt="Le Hobbit - Tolkien" 
                       className="h-95 w-auto object-cover mb-2"  
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                  src="https://m.media-amazon.com/images/I/71KilybDOoL.jpg" 
                  alt="Le Petit Prince" 
                  className="h-95 w-auto object-cover mb-2" 
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                 src="https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg" 
                 alt="Le Comte de Monte-Cristo - Dumas" 
                 className="h-95 w-auto object-cover mb-2"
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                     src="https://m.media-amazon.com/images/I/81XzJoFR3kL.jpg" 
                     alt="L'Étranger - Albert Camus" 
                     className="h-95 w-auto object-cover mb-2"  
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
               <div className="book text-center">
                 <img 
                  src="https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg" 
                  alt="Le Fléau - Stephen King" 
                  className="h-95 w-auto object-cover mb-2" 
                 />
                 <p>Harry Potter à l'école des sorciers</p>
               </div>
             </div>
             
           </section>
         </main>

       </div>
       
    
     </div>
   </>

    );
};

export default Library;
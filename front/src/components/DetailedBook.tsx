const BookDetail = () => {
    return (
        <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
        
      <section className="bg-beige-50 p-4 md:p-8">
        <div className="flex flex-row items-center md:flex-row  md:gap-8">
          <img 
                 src="https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg" 
                 alt="Harry Potter à l'école des sorciers" 
                 className="w-30 mr-5 h-auto mb-4 md:w-60" 
          />
  
          <div className="text-sm md:text-base max-w-xl">
            <p className="text-gray-700 mb-1">Par Natsu Hyûga</p>
            <h1 className="text-lg font-bold mb-2">Les carnets de l’apothicaire</h1>
  
            <p><span className="font-semibold">Catégorie</span> : Manga</p>
            <p className="mb-2"><span className="font-semibold">Date de publication</span> : octobre 2011</p>

            <p className="font-semibold mt-4 mb-1">Description :</p>
            <p >
              Maomao est toujours en mission au palais impérial, où elle continue d’utiliser son intelligence pour 
              résoudre des mystères liés aux poisons et à la politique complexe qui règne dans l’empire. 
              Ce tome approfondit les intrigues et les relations entre les personnages.
            </p>
  
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1">
                <input type="checkbox" />
                <span>Lu</span>
              </button>
              <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1">
                <input type="checkbox" />
                <span>a Lire</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  };
  
  export default BookDetail;
  
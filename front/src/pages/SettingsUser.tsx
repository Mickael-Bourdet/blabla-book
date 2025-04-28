
const SettingsUser = () => {
    return (
<>
     
<div className="bg-nav-footer-50 font-sans mt-[100px]">
     
     
       {/* Contenu principal avec marge à gauche */}
       <div className="md:ml-64"> {/* Ajoute une marge à gauche sur les écrans md et plus grands */}
      
         
         <main className="p-4 pb-20">
           <section className="content">
            <div className="user-header">
                <div className="photo-profile">
                  <img src="" alt="profil" />
                <h3>Photo de profil</h3>
                </div>
                <div>
                    <h3>Nombre de pages lu : 5789</h3>
                </div>
            </div>
            <div>
                <h3>Pseudo</h3>
                <h3>Email</h3>
                <h3>Mot de passe</h3>
            </div>
            </section>
         </main>

       </div>
       
    
     </div>
   </>

    );
};

export default SettingsUser;
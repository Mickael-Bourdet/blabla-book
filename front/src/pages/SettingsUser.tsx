const SettingUser = () => {
    return (
      <>
        <div className="flex flex-col w-full mt-[100px] p-8 md:ml-100">
          {/* Profil */}
          <div className="flex mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl mb-4">
              👤
            </div>
            <p className="font-bold mt-10 ml-20">Nombre de pages : 520</p>
          </div>

          {/* Form */}
          <form action="/user/:userId" method="POST" className="w-full max-w-md flex flex-col gap-6">
            {/* Pseudo */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <input
                className="w-[150px] my-1"
                type="text"
                id="login-username"
                name="username"
                placeholder="Pseudo"
              />
            </div>

            {/* Email */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <input
                className="w-[150px] my-1"
                type="email"
                id="register-email"
                name="email"
                placeholder="Email"
              />
            </div>

            {/* Mot de passe */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <input
                className="w-[150px] my-1"
                type="password"
                id="register-password"
                name="password"
                placeholder="***********"
              />
            </div>

            {/* Bouton sauvegarder */}
            <button className="mt-4 bg-white border py-2 px-4 rounded hover:bg-gray-100" type="submit">
              Sauvegarder
            </button>
          </form>

          {/* Boutons se déconnecter et supprimer */}
         {/* Boutons se déconnecter et supprimer */}
 <div className="flex gap-20 mt-20 mb-20">
          
          <button className="bg-white text-black rounded px-4 py-2 mt-4 border hover:bg-gray-100" type="button">Se déconnecter</button>
          <button className="bg-black text-white rounded px-4 py-2 mt-4 border-none hover:bg-gray-900" type="button">Supprimer mon compte</button>
         
         </div>
        </div>
      </>
    );
};

export default SettingUser;

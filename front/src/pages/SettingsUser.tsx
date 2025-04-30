import type { IUser } from "../@types";
import { useState, useEffect } from "react";
import { getOneUser, updateUser } from "../api/index";
import { useParams } from "react-router-dom";

const SettingUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<IUser>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false); // Modal de confirmation

  useEffect(() => {
    const loadData = async () => {
      if (userId) {
        const newUser = await getOneUser(Number.parseInt(userId));
        setUser(newUser);
        setUsername(newUser.name);
       setEmail(newUser.email); 
       setEmailConfirm(newUser.email)
      }
    };
    loadData();
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification de l'email
    if (email !== emailConfirm) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    // Vérification du mot de passe
    if (password !== passwordConfirm) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    // Vérification du mot de passe actuel si un nouveau mot de passe est entré
    if (password && currentPassword !== user?.password) {
      alert("Le mot de passe actuel est incorrect");
      return;
    }

    // Ouvrir la fenêtre de confirmation
    setConfirmationModal(true);
  };

  const handleConfirmation = async (confirm: boolean) => {
    if (confirm) {
        
      const updatedData: { name?: string; email?: string; password?: string } = {};
      console.log("Mise à jour avec :", updatedData);
      // Mise à jour conditionnelle en fonction des champs modifiés
      if (username !== user?.name) updatedData.name = username;
      if (email !== user?.email) updatedData.email = email;
      if (password) updatedData.password = password;

      // Si des données ont été modifiées, effectuer la mise à jour
      if (Object.keys(updatedData).length > 0) {
        await updateUser(Number(userId), updatedData);
         // Recharge les infos utilisateur depuis l'API
  const updatedUser = await getOneUser(Number(userId));
  setUser(updatedUser);
  setUsername(updatedUser.name);
  setEmail(updatedUser.email);
  setEmailConfirm(updatedUser.email);
      }

      // Réinitialiser les champs et fermer la fenêtre de confirmation
      setPassword("");
      setPasswordConfirm("");
      setCurrentPassword("");
      setEmailError(false);
      setPasswordError(false);
      setConfirmationModal(false);

     
    } else {
      // Si l'utilisateur annule, fermer la fenêtre de confirmation
      setConfirmationModal(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full mt-[100px] p-8 md:ml-100">
        {/* Profil */}
        <div className="flex mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl mb-4">
            👤
          </div>
          <div className="flex flex-col">
            <p className="font-bold mt-10 ml-20 ">{user?.name}</p>
            <p className="font-bold mt-10 ml-20">
              Nombre de pages lues :{" "}
              {user?.books_already_read.reduce((total, book) => total + book.page_count, 0)}
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6">
          {/* Pseudo */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <input
              className="w-[150px] my-1"
              type="text"
              id="login-username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <input
              className="w-[150px] my-1"
              type="email"
              id="register-email"
              name="email"
              placeholder="Nouvel Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Confirmer l'email */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <input
              className="w-[150px] my-1"
              type="email"
              id="register-email-confirm"
              name="email-confirm"
              placeholder="Confirmer l'Email"
              value={emailConfirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
            />
          </div>

          {/* Affichage de l'erreur email */}
          {emailError && <p className="text-red-500">Les emails ne correspondent pas.</p>}

          {/* Mot de passe actuel */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <input
              className="w-[150px] my-1"
              type="password"
              id="current-password"
              name="current-password"
              placeholder="Mot de passe actuel"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          {/* Nouveau mot de passe */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <input
              className="w-[150px] my-1"
              type="password"
              id="register-password"
              name="password"
              placeholder="Nouveau mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirmer le mot de passe */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <input
              className="w-[150px] my-1"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirmer le mot de passe"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          {/* Affichage de l'erreur de mot de passe */}
          {passwordError && <p className="text-red-500">Les mots de passe ne correspondent pas.</p>}

          {/* Bouton sauvegarder */}
          <button
            className="mt-4 bg-white border py-2 px-4 rounded hover:bg-gray-100"
            type="submit"
          >
            Sauvegarder
          </button>
        </form>

        {/* Modal de confirmation */}
        {confirmationModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <p>Êtes-vous sûr de vouloir sauvegarder ces modifications ?</p>
              <div className="flex gap-4 mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleConfirmation(false)}
                >
                  Annuler
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleConfirmation(true)}
                >
                  Confirmer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Boutons se déconnecter et supprimer */}
        <div className="flex gap-20 mt-20 mb-20">
          <button
            className="bg-white text-black rounded px-4 py-2 mt-4 border hover:bg-gray-100"
            type="button"
          >
            Se déconnecter
          </button>
          <button
            className="bg-black text-white rounded px-4 py-2 mt-4 border-none hover:bg-gray-900"
            type="button"
          >
            Supprimer mon compte
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingUser;

import type { IUser } from "../@types";
import { useState, useEffect } from "react";
import { getOneUser, updateUser, deleteUser } from "../api/apiUser";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../utils/store/useAuthStore";

const SettingsUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUser | null>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { user } = useAuthStore();

  useEffect(() => {
    const loadData = async () => {
      const newUser = await getOneUser();
      if (!newUser) {
        navigate("/404");
        return;
      }
      setUserData(newUser);
      setUsername(newUser.name);
      setEmail(newUser.email);
      setEmailConfirm(newUser.email);
    };
    loadData();
  }, []);

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

    // Ouvrir la fenêtre de confirmation
    setConfirmationModal(true);
  };

  const handleConfirmation = async (confirm: boolean) => {
    if (confirm) {
      const updatedData: {
        name?: string;
        email?: string;
        password?: string;
        currentPassword?: string;
        confirmPassword?: string;
      } = {};
      console.log("Mise à jour avec :", updatedData);
      // Mise à jour conditionnelle en fonction des champs modifiés
      if (username !== userData?.name) updatedData.name = username;
      if (email !== userData?.email) updatedData.email = email;
      if (password && currentPassword) {
        updatedData.password = password;
        updatedData.currentPassword = currentPassword;
        updatedData.confirmPassword = password;
      }

      // Si des données ont été modifiées, effectuer la mise à jour
      if (Object.keys(updatedData).length > 0) {
        await updateUser(updatedData);
        // Recharge les infos utilisateur depuis l'API
        const updatedUser = await getOneUser();
        if (!updatedUser) {
          navigate("/404");
          return;
        }
        setUserData(updatedUser);
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

  const handleDeleteAccount = async () => {
    await deleteUser();
    // Rediriger vers la page d’accueil ou de connexion après suppression
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full p-8 md:ml-100">
      {/* Bouton Retour */}
      <div className="mb-4">
        <Link to={`/profile`}>
          <button className="text-blue-500 hover:underline">← Retour</button>
        </Link>
      </div>
      {/* Profil */}
      <div className="flex mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl mb-4">
          👤
        </div>
        <div className="flex flex-col">
          <p className="font-bold mt-10 ml-20 ">{userData?.name}</p>
          <p className="font-bold mt-10 ml-20">
            Nombre de pages lues :{" "}
            {userData?.books_already_read.reduce(
              (total, book) => total + book.page_count,
              0
            )}
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-6"
      >
        {/* Pseudo */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <input
            className="w-120 my-1 focus:outline-none "
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
            className="w-120 my-1 focus:outline-none "
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
            className="w-120 my-1 focus:outline-none "
            type="email"
            id="register-email-confirm"
            name="email-confirm"
            placeholder="Confirmer l'Email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </div>

        {/* Affichage de l'erreur email */}
        {emailError && (
          <p className="text-red-500">Les emails ne correspondent pas.</p>
        )}

        {/* Mot de passe actuel */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <input
            className="w-120 my-1 focus:outline-none "
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
            className="w-120 my-1 focus:outline-none "
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
            className="w-120 my-1 focus:outline-none "
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirmer le mot de passe"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        {/* Affichage de l'erreur de mot de passe */}
        {passwordError && (
          <p className="text-red-500">
            Les mots de passe ne correspondent pas.
          </p>
        )}

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
        <div className="fixed center flex items-center justify-center">
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

      {deleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-body p-6 rounded shadow-lg">
            <p className="text-lg font-semibold">
              Es-tu sûr de vouloir supprimer ton compte ? Cette action est
              irréversible.
            </p>
            <div className="flex gap-4 mt-4 justify-end">
              <button
                className="bg-white-300 border text-black px-4 py-2 rounded"
                onClick={() => setDeleteModal(false)}
              >
                Annuler
              </button>
              <button
                className="bg-red-600 border text-white px-4 py-2 rounded"
                onClick={handleDeleteAccount}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Boutons se déconnecter et supprimer */}
      <div className="flex gap-20 mt-20 mb-20">
        <Link
          to="/logout"
          className="bg-white text-black rounded px-4 py-2 mt-4 border hover:bg-gray-100"
          type="button"
        >
          Se déconnecter
        </Link>
        <button
          className="bg-black text-white rounded px-4 py-2 mt-4 border-none hover:bg-gray-900"
          type="button"
          onClick={() => setDeleteModal(true)}
        >
          Supprimer mon compte
        </button>
      </div>
    </div>
  );
};

export default SettingsUser;

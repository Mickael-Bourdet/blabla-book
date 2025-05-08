import type { IUser, IUserUpdate } from "../@types";
import { useState, useEffect } from "react";
import { getOneUser, updateUser, deleteUser } from "../api/apiUser";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../utils/store/useAuthStore";

const SettingsUser = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUser | null>(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [editPassword, setEditPassword] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const oneUser = await getOneUser();

      if (!oneUser) {
        navigate("/404");
        return;
      }
      setUserData(oneUser);

      setUsername(oneUser.name);
      setEmail(oneUser.email);
    };
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ouvrir la fenêtre de confirmation
    setConfirmationModal(true);
  };

  const handleConfirmation = async (confirm: boolean) => {
    if (!confirm) {
      setConfirmationModal(false);
      return;
    }

    const updatedData: IUserUpdate = {};

    if (username !== userData?.name) updatedData.name = username;
    if (email !== userData?.email) updatedData.email = email;

    // Gestion du mot de passe
    if (editPassword) {
      if (newPassword !== confirmPassword) {
        setPasswordError("Les mots de passe ne correspondent pas.");
        return;
      }
      updatedData.currentPassword = currentPassword;
      updatedData.password = newPassword;
    }

    try {
      if (Object.keys(updatedData).length > 0) {
        await updateUser(updatedData);
        const updatedUser = await getOneUser();
        if (!updatedUser) {
          navigate("/404");
          return;
        }
        setUserData(updatedUser);
        // pour mettre a jour le user sur tout les autre composant
        useAuthStore.getState().setUser(updatedUser);
      }

      // Réinitialisation des champs mot de passe
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setEditPassword(false);
      setPasswordError("");
      setEditEmail(false);
      setEmailError(false);
      setConfirmationModal(false);
    } catch (err) {
      setPasswordError("Mot de passe actuel incorrect.");
    }
  };

  const handleDeleteAccount = async () => {
    await deleteUser();

    // Rediriger vers la page d’accueil ou de connexion après suppression
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full p-8 items-center">
      {/* Bouton Retour */}
      <div className="mb-4">
        <Link to={`/profile`}>
          <button className="text-blue-500 hover:underline">← Retour</button>
        </Link>
      </div>
      {/* Profil */}
      <div className="flex mb-5">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl mb-4">👤</div>
        <div className="flex flex-col">
          <p className="font-bold mt-10 ml-20 ">{userData?.name}</p>
          <p className="font-bold mt-10 ml-20">Nombre de livres lus : {userData?.books_already_read.length}</p>
          <p className="font-bold mt-10 ml-20">
            Nombre de pages lues : {userData?.books_already_read.reduce((total, book) => total + book.page_count, 0)}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-6">
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

        {/* email */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <input
            className="w-120 my-1 focus:outline-none"
            type="email"
            id="register-email"
            name="email"
            placeholder="Nouvel Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!editEmail}
          />
          <button type="button" className="ml-2 text-gray-500 text-sm" onClick={() => setEditEmail(!editEmail)}>
            {editEmail ? "✔️" : "✏️"}
          </button>
        </div>

        {emailError && <p className="text-red-500">Les emails ne correspondent pas.</p>}

        {/* Nouveau mot de passe */}
        {/* Changer mot de passe */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-2">
          <input
            className="w-120 my-1 focus:outline-none"
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            readOnly={!editPassword}
          />
          <button type="button" className="ml-2 text-gray-500 text-sm" onClick={() => setEditPassword(!editPassword)}>
            {editPassword ? "✔️" : "✏️"}
          </button>
        </div>

        {editPassword && (
          <>
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <input
                className="w-120 my-1 focus:outline-none"
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between border-b border-gray-300 pb-2">
              <input
                className="w-120 my-1 focus:outline-none"
                type="password"
                placeholder="Mot de passe actuel"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </>
        )}

        {passwordError && <p className="text-red-500">{passwordError}</p>}

        {/* Bouton sauvegarder */}
        <button className="mt-4 bg-white border py-2 px-4 rounded hover:bg-gray-100" type="submit">
          Sauvegarder
        </button>
      </form>

      {/* Modal de confirmation */}
      {confirmationModal && (
        <div className="fixed center flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Êtes-vous sûr de vouloir sauvegarder ces modifications ?</p>

            {/* Afficher l'email modifié s'il a changé */}
            {email !== userData?.email && (
              <div className="mt-4">
                <p>
                  <strong>Nouvel Email : </strong>
                  {email}
                </p>
              </div>
            )}

            <div className="flex gap-4 mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleConfirmation(false)}>
                Annuler
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleConfirmation(true)}>
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
              Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible.
            </p>
            <div className="flex gap-4 mt-4 justify-end">
              <button
                className="bg-white-300 border text-black px-4 py-2 rounded"
                onClick={() => setDeleteModal(false)}
              >
                Annuler
              </button>
              <Link
                to="/logout"
                className="bg-red-600 border text-white px-4 py-2 rounded"
                onClick={handleDeleteAccount}
                type="button"
              >
                Supprimer
              </Link>
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

import { useAuthStore } from "../../utils/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => { 
   // ici on récupère le store en faisant un import (uniquement le logout)
  const { logout } = useAuthStore();
  // ici on utilise la redirection de React-router-dom
  const navigate = useNavigate();
  useEffect(() => {
    // Appel de la fonction logout pour déconnecter l'utilisateur
    logout();

    // Redirection vers la page d'accueil après la déconnexion
    navigate("/");
  }, [logout, navigate]);

  return null;
}

export default Logout;
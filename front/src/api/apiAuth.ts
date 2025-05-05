import { IError, ILogin, IRegister } from "../@types/auth";
import { useAuthStore } from "../utils/store/useAuthStore";

const API_URL = "http://localhost:3000";

/**
 *
 * @param loginData
 * @returns
 */
export const loginUser = async (loginData: ILogin) => {
  console.log("🚀 loginUser() appelée avec :", loginData);

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    console.log("🌐 Statut de la réponse :", response.status);

    if (!response.ok) {
      const error = await response.json();
      console.log("❌ Réponse non OK :", error);
      throw new Error(error.message || "Erreur inconnue lors de la connexion.");
    }

    const data = await response.json();
    console.log("📥 Données reçues du backend :", data);

    // Utiliser le store pour stocker les informations d'authentification
    if (data.user && data.token ) {
      useAuthStore.getState().login(data.user, data.token);
    }

    return data;
  } catch (error) {
    console.log("❌ Erreur capturée :", error);
    throw error;
  }
};

/**
 *
 * @param registerData
 * @returns
 */
export const registerUser = async (registerData: IRegister) => {
  console.log("🚀 registerUser() appelée avec :", registerData);

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });

    const resData = await response.json();
    console.log("🌐 Réponse serveur (register) :", resData);

    if (!response.ok) {
      // Créer un objet d'erreur avec toutes les informations de la réponse
      const error: IError = {
        message: resData.message || "Erreur d'inscription",
        status: resData.status,
        errors: resData.errors, // Récupérer le tableau d'erreurs s'il existe
      };
      throw error;
    }

    return resData;
  } catch (error) {
    console.log("❌ Erreur capturée :", error);
    throw error;
  }
};

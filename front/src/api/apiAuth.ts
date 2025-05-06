import { IError, ILogin, IRegister } from "../@types/auth";
import { useAuthStore } from "../utils/store/useAuthStore";

const API_URL = "http://localhost:3000";

/**
 * Function to log in a user.
 *
 * @param {ILogin} loginData - The login data containing email and password.
 * @returns {Promise<Object>} - The response data containing user and token.
 * @throws {Error} - Throws an error if the login fails.
 */
export const loginUser = async (loginData: ILogin) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log("❌ Réponse non OK :", error);
      throw new Error(error.message || "Erreur inconnue lors de la connexion.");
    }

    const data = await response.json();

    // Utiliser le store pour stocker les informations d'authentification
    if (data.user && data.token) {
      useAuthStore.getState().login(data.user, data.token);
    }

    return data;
  } catch (error) {
    console.log("❌ Erreur capturée :", error);
    throw error;
  }
};

/**
 * Function to register a new user.
 *
 * @param {IRegister} registerData - The registration data containing name, email, password, and confirmPassword.
 * @returns {Promise<Object>} - The response data from the registration.
 * @throws {IError} - Throws an error if the registration fails.
 */
export const registerUser = async (registerData: IRegister) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    });

    const resData = await response.json();

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

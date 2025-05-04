import { IRegister } from "../@types/auth";

const API_URL = "http://localhost:3000"; // à extraire dans un .env plus tard

/**
 * 
 * @param registerData 
 * @returns 
 */
export const registerUser = async (registerData: IRegister) => {
  console.log("🚀 registerUser() appelée avec :", registerData);

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerData),
  });

  const resData = await response.json();
  console.log("🌐 Réponse serveur (register) :", resData);

  if (!response.ok) throw new Error(resData.message || "Erreur d'inscription");

  return resData;
}
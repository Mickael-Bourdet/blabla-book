import { useState } from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { IRegister, IError } from "../@types/auth";
import { registerUser } from "../api/apiAuth";
import { toastError } from "../utils/toastError";
import { toastSuccess } from "../utils/toastSuccess";

const Authentication = () => {

  const [registerData, setRegisterDate] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleRegister = async () => {
    console.log("📤 Étape 1 - handleRegister appelée");
    console.log("📤 Étape 2 - données envoyées :", registerData);
 
    if (registerData.password !== registerData.confirmPassword) {
      toastError("Les mots de passe ne correspondent pas");
      return;
    }
 
    try {
      const result = await registerUser(registerData);
 
      console.log("✅ Étape 3 - utilisateur inscrit :", result);
      toastSuccess("Inscription réussie !");
      // ✅ Réinitialisation des champs
      setRegisterDate({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error: unknown) {
      console.error("❌ Étape 4 - erreur :", error);
      const apiError = error as IError;
      
      // Utiliser le tableau d'erreurs s'il existe, sinon utiliser le message général
      if (apiError.errors && apiError.errors.length > 0) {
        toastError(apiError.errors);
      } else {
        toastError(apiError.message || "Erreur d'inscription");
      }
    }
  };

  return (
    <main className="md:ml-64">
      <Login />
      <Register 
        data={registerData}
        onChange={setRegisterDate}
        onSubmit={handleRegister}     
      />
    </main>
  );
};

export default Authentication;

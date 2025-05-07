import { useState } from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { IRegister, IError } from "../@types/auth";
import { registerUser } from "../api/apiAuth";
import { toastError } from "../utils/toast/toastError";
import { toastSuccess } from "../utils/toast/toastSuccess";

const Authentication = () => {
  const [registerData, setRegisterDate] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    if (registerData.password !== registerData.confirmPassword) {
      toastError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      await registerUser(registerData);
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
    <section>
      <Login />
      <Register
        data={registerData}
        onChange={setRegisterDate}
        onSubmit={handleRegister}
      />
    </section>
  );
};

export default Authentication;

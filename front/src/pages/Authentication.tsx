import { useState } from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { IRegister, IError, ILogin } from "../@types/auth";
import { loginUser, registerUser } from "../api/apiAuth";
import { toastError } from "../utils/toast/toastError";
import { toastSuccess } from "../utils/toast/toastSuccess";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [registerData, setRegisterDate] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = async () => {
    console.log("📤 Étape 1 - handleLogin appelée");

    try {
      console.log("📤 Étape 2 - envoi des données :", loginData);
      const data = await loginUser(loginData);
      console.log("✅ Étape 3 - réponse reçue :", data);
      console.log("📦 Étape 4 - données stockées");
      toastSuccess("Connexion réussie !");

      // ✅ Réinitialisation des champs
      setLoginData({
        email: "",
        password: "",
      });

      // Redirection
      navigate("/profile");
    } catch (error) {
      console.log("❌ Étape 5 - erreur capturée :", error);
      toastError("Echec de la connexion");
    }
  };

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
    <main>
      <Login data={loginData} onChange={setLoginData} onSubmit={handleLogin} />
      <Register
        data={registerData}
        onChange={setRegisterDate}
        onSubmit={handleRegister}
      />
    </main>
  );
};

export default Authentication;

import { useEffect, useState } from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import { IRegister, IError, ILogin } from "../@types/auth";
import { loginUser, registerUser } from "../api/apiAuth";
import { toastError } from "../utils/toastError";
import { toastSuccess } from "../utils/toastSuccess";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../utils/useAuthStore";

const Authentication = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const user = useAuthStore((state) => state.user);

  // Rediriger vers le profil si déjà connecté
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);
  
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [registerData, setRegisterDate] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = async () => {
    try {
      const data = await loginUser(loginData);
      console.log("Données de connexion reçues:", data);

      // Vérifier que les données nécessaires sont présentes
      if (!data.user || !data.token) {
        throw new Error("Données utilisateur incomplètes");
      }

      // Mettre à jour le store avec les données utilisateur
      login(data.user, data.token);

      // Vérifier que le store a bien été mis à jour
      console.log("Store après login:", useAuthStore.getState());

      toastSuccess("Connexion réussie !");

      // Réinitialisation des champs
      setLoginData({
        email: "",
        password: "",
      });

      // Redirection
      navigate("/profile");
    } catch (error) {
      console.log("❌ Erreur de connexion:", error);
      toastError("Échec de la connexion");
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
    <main className="md:ml-64">
      <Login
        data={loginData}
        onChange={setLoginData}
        onSubmit={handleLogin}
      />
      <Register
        data={registerData}
        onChange={setRegisterDate}
        onSubmit={handleRegister}
      />
    </main>
  );
};

export default Authentication;

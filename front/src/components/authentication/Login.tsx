import AuthForm from "./AuthForm";
import { ILogin } from "../../@types/auth";
import { useAuthStore } from "../../utils/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../api/apiAuth";
import { toastSuccess } from "../../utils/toast/toastSuccess";
import { toastError } from "../../utils/toast/toastError";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  /**
   * Handles the login process.
   */
  const handleLogin = async () => {
    try {
      const data = await loginUser(loginData);
      const { name, id, token } = data;

      login(name, id, token);
      toastSuccess("Connexion réussie !");

      setLoginData({
        email: "",
        password: "",
      });

      navigate("/profile");
    } catch (error) {
      console.log("❌ Étape 5 - erreur capturée :", error);
      toastError("Echec de la connexion");
    }
  };

  return (
    <AuthForm title="Me connecter">
      <div className="mb-4">
        <label htmlFor="loginEmail" className="block mb-1 text-sm">
          E-mail
        </label>
        <input
          type="text"
          id="loginEmail"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="loginPassword" className="block mb-1 text-sm">
          Mot de passe
        </label>
        <input
          type="password"
          id="loginPassword"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Mot de passe"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded"
          onClick={handleLogin}
        >
          Connexion
        </button>
      </div>
    </AuthForm>
  );
};

export default Login;

import AuthForm from "./AuthForm";

const Login = () => {
  return (
    <AuthForm title="Se connecter">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Votre email"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-1 font-medium">Mot de passe</label>
        <input
          type="password"
          id="password"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
          placeholder="Votre mot de passe"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Connexion
      </button>
    </AuthForm>
  );
};

export default Login;
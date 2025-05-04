import AuthForm from "./AuthForm";

const Login = () => {
  return (
    <AuthForm title="Me connecter">
      <div className="mb-4">
        <label htmlFor="loginName" className="block mb-1 text-sm">Nom</label>
        <input
          type="text"
          id="loginName"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="loginPassword" className="block mb-1 text-sm">Mot de passe</label>
        <input
          type="password"
          id="loginPassword"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded"
        >
          Connexion
        </button>
      </div>
    </AuthForm>
  );
};

export default Login;
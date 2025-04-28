import AuthForm from "./AuthForm";

const Register = () => {
  return (
    <AuthForm title="M'inscrire">
      <div className="mb-4">
        <label htmlFor="reg-pseudo" className="block mb-1 text-sm">Pseudo</label>
        <input
          type="text"
          id="reg-pseudo"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reg-email" className="block mb-1 text-sm">Email</label>
        <input
          type="email"
          id="reg-email"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reg-password" className="block mb-1 text-sm">Mot de passe</label>
        <input
          type="password"
          id="reg-password"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="reg-confirm" className="block mb-1 text-sm">Confirmation Mot de passe</label>
        <input
          type="password"
          id="reg-confirm"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded"
        >
          Valider l'inscription
        </button>
      </div>
    </AuthForm>
  );
};

export default Register;
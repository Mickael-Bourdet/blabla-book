import AuthForm from "./AuthForm";
import { ILogin } from "../../@types/auth";

export interface ILoginProps {
  data: ILogin;
  onChange: (data: ILogin) => void;
  onSubmit: () => void;
}

const Login = ({ data, onChange, onSubmit }: ILoginProps) => {
  
  return (
    <AuthForm title="Me connecter">
      <div className="mb-4">
        <label htmlFor="loginEmail" className="block mb-1 text-sm">E-mail</label>
        <input
          type="text"
          id="loginEmail"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="loginPassword" className="block mb-1 text-sm">Mot de passe</label>
        <input
          type="password"
          id="loginPassword"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Value"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded"
          onClick={onSubmit}
        >
          Connexion
        </button>
      </div>
    </AuthForm>
  );
};

export default Login;
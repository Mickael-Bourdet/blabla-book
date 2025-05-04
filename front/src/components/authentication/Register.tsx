import AuthForm from "./AuthForm";
import { IRegister } from "../../@types/auth";

export interface IRegisterProps {
  data: IRegister;
  onChange: (data: IRegister) => void;
  onSubmit: () => void;
}

const Register = ({ data, onChange, onSubmit }: IRegisterProps) => {
  return (
    <AuthForm title="M'inscrire">
      <div className="mb-4">
        <label htmlFor="Name" className="block mb-1 text-sm">Nom</label>
        <input
          type="text"
          id="Name"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Pseudo"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm">Adresse email</label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-sm">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Mot de passe"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block mb-1 text-sm">Confirmation</label>
        <input
          type="password"
          id="confirmPassword"
          value={data.confirmPassword}
          onChange={(e) => onChange({ ...data, confirmPassword: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Confirmer le mot de passe"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded"
          onClick={onSubmit}
        >
          Incription
        </button>
      </div>
    </AuthForm>
  );
};

export default Register;
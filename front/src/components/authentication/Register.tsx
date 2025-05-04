import AuthForm from "./AuthForm";
import { IRegister } from "../../@types/auth";
import { useState } from "react";

export interface IRegisterProps {
  data: IRegister;
  onChange: (data: IRegister) => void;
  onSubmit: () => void;
}

const Register = ({ data, onChange, onSubmit }: IRegisterProps) => {
  // État pour contrôler l'affichage des règles de mot de passe
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  
  return (
    <AuthForm title="M'inscrire">
      <div className="mb-4">
        <label htmlFor="registerName" className="block mb-1 text-sm">Nom</label>
        <input
          type="text"
          id="registerName"
          value={data.name}
          onChange={(e) => onChange({ ...data, name: e.target.value })}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Nom"
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
        <label htmlFor="registerPassword" className="block mb-1 text-sm">Mot de passe</label>
        <input
          type="password"
          id="registerPassword"
          value={data.password}
          onChange={(e) => onChange({ ...data, password: e.target.value })}
          onFocus={() => setShowPasswordRules(true)}
          onBlur={() => setShowPasswordRules(false)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none"
          placeholder="Mot de passe"
        />
        
        {/* Affichage des règles de mot de passe */}
        {showPasswordRules && (
          <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded">
            <p className="font-medium mb-1">Le mot de passe doit contenir :</p>
            <ul className="list-disc pl-5">
              <li>Au moins 12 caractères</li>
              <li>Au moins une lettre majuscule</li>
              <li>Au moins une lettre minuscule</li>
              <li>Au moins un chiffre</li>
              <li>Au moins un caractère spécial</li>
              <li>Pas d'espaces</li>
            </ul>
          </div>
        )}
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
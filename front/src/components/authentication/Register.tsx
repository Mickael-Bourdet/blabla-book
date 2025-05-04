import { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import { IRegister } from "../../@types/auth";

export interface IRegisterProps {
  data: IRegister;
  onChange: (data: IRegister) => void;
  onSubmit: () => void;
}

interface PasswordRules {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
  noSpaces: boolean;
}

const Register = ({ data, onChange, onSubmit }: IRegisterProps) => {
  // État pour contrôler l'affichage des règles de mot de passe
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  
  // État pour suivre quelles règles de mot de passe sont respectées
  const [passwordValidation, setPasswordValidation] = useState<PasswordRules>({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
    noSpaces: false
  });

  // Vérifier les règles de mot de passe à chaque changement
  useEffect(() => {
    if (data.password) {
      setPasswordValidation({
        minLength: data.password.length >= 12,
        hasUppercase: /[A-Z]/.test(data.password),
        hasLowercase: /[a-z]/.test(data.password),
        hasNumber: /[0-9]/.test(data.password),
        hasSpecial: /[^A-Za-z0-9\s]/.test(data.password),
        noSpaces: !/\s/.test(data.password)
      });
    } else {
      // Réinitialiser toutes les validations si le mot de passe est vide
      setPasswordValidation({
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecial: false,
        noSpaces: false
      });
    }
  }, [data.password]);

  // Fonction pour afficher l'indicateur de validation
  const renderValidationMark = (isValid: boolean) => {
    return isValid 
      ? <span className="text-green-500 ml-1">✓</span> 
      : <span className="text-gray-400 ml-1">•</span>;
  };
  
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
        
        {/* Affichage des règles de mot de passe uniquement quand l'input est en focus */}
        {showPasswordRules && (
          <div className="mt-2 text-xs bg-gray-50 p-3 rounded border border-gray-200">
            <p className="font-medium mb-2">Le mot de passe doit contenir :</p>
            <ul className="space-y-1">
              <li className={passwordValidation.minLength ? "text-green-600" : "text-gray-600"}>
                {renderValidationMark(passwordValidation.minLength)} Au moins 12 caractères
              </li>
              <li className={passwordValidation.hasUppercase ? "text-green-600" : "text-gray-600"}>
                {renderValidationMark(passwordValidation.hasUppercase)} Au moins une lettre majuscule
              </li>
              <li className={passwordValidation.hasLowercase ? "text-green-600" : "text-gray-600"}>
                {renderValidationMark(passwordValidation.hasLowercase)} Au moins une lettre minuscule
              </li>
              <li className={passwordValidation.hasNumber ? "text-green-600" : "text-gray-600"}>
                {renderValidationMark(passwordValidation.hasNumber)} Au moins un chiffre
              </li>
              <li className={passwordValidation.hasSpecial ? "text-green-600" : "text-gray-600"}>
                {renderValidationMark(passwordValidation.hasSpecial)} Au moins un caractère spécial
              </li>
              <li className={passwordValidation.noSpaces ? "text-green-600" : "text-gray-600"}>
                {renderValidationMark(passwordValidation.noSpaces)} Pas d'espaces
              </li>
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
        
        {/* Vérification que les mots de passe correspondent */}
        {data.password && data.confirmPassword && (
          <div className={`mt-1 text-xs ${data.password === data.confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
            {data.password === data.confirmPassword ? 
              <span>✓ Les mots de passe correspondent</span> : 
              <span>✗ Les mots de passe ne correspondent pas</span>}
          </div>
        )}
      </div>
      
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded"
          onClick={onSubmit}
        >
          Inscription
        </button>
      </div>
    </AuthForm>
  );
};

export default Register;
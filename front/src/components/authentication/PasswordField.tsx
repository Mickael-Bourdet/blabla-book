import { useState } from "react";

interface PasswordFieldProps {
  label?: string;
  id?: string;
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/**
 * PasswordField component for handling password input with toggle visibility.
 *
 * @param {Object} param0 - Component props.
 * @param {string} param0.label - Label for the password field.
 * @param {string} param0.id - ID attribute for the input element.
 * @param {string} param0.name - Name attribute for the input element.
 * @param {string} param0.value - Current value of the password field.
 * @param {Function} param0.onChange - Function to handle value changes.
 * @param {string} param0.placeholder - Placeholder text for the input.
 * @param {Function} param0.onFocus - Function to handle focus events.
 * @param {Function} param0.onBlur - Function to handle blur events.
 * @returns {JSX.Element} - The rendered password field component.
 */
const PasswordField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        tabIndex={-1}
      >
        {showPassword ? (
          <i className="fa-solid fa-eye-slash"></i>
        ) : (
          <i className="fa-solid fa-eye"></i>
        )}
      </button>
    </div>
  );
};

export default PasswordField;

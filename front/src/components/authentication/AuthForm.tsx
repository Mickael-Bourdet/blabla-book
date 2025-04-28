import { ReactNode } from "react";

type AuthFormProps = {
  title: string;
  children: ReactNode;
};

const AuthForm = ({ title, children }: AuthFormProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        {children}
      </form>
    </div>
  );
}

export default AuthForm;
import { ReactNode } from "react";

type AuthFormProps = {
  title: string;
  children: ReactNode;
};

const AuthForm = ({ title, children }: AuthFormProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form className="p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold -ml-20 mb-6 text-left">{title}</h2>
        {children}
      </form>
    </div>
  );
};

export default AuthForm;

import { ReactNode } from "react";

type AuthFormProps = {
  title: string;
  children: ReactNode;
};

const AuthForm = ({ title, children }: AuthFormProps) => {
  return (
    <div className="flex items-center justify-center bg-body">
      <form className="p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold sm:-ml-20 mb-6 text-left font-title">{title}</h2>
        {children}
      </form>
    </div>
  );
};

export default AuthForm;

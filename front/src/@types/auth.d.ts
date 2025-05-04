export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// types/ErrorTypes.ts
export interface IError {
  message: string;
  status?: number;
  code?: string;
}

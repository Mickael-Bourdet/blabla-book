/**
 * Interface representing the structure of login data.
 */
export interface ILogin {
  email: string;
  password: string;
}

/**
 * Interface representing the structure of registration data.
 */
export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Interface representing the structure of an error object.
 */
export interface IError {
  message: string;
  status?: number;
  code?: string;
  errors?: string[];
}

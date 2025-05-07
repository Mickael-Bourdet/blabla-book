export interface ICategory {
  id: number;
  name: string;
}

export interface IBook {
  id: number;
  title: string;
  isbn: string;
  description: string | null;
  published: number | null;
  cover_url: string | null;
  page_count: number;
  categories: ICategory[];
  authors: IAuthor[];
}

export type IBooks = IBook[];

export interface IAuthor {
  id: number;
  name: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  books_already_read: IBook[];
  books_wish_read: IBook[];
}

export interface IUserUpdate {
    name?: string;
    email?: string;
    currentPassword?: string;
    password?: string;
  }
  
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
  users_has_read: IUser[];
  users_need_to_read: IUser[];
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

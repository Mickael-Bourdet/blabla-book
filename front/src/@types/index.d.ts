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
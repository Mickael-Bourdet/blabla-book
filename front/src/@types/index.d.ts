export interface ICategory {
  id: number;
  name: string;
}

export interface IBook {
  id: number
  title: string;
  isbn: string;
  description: string | null;
  published: number | null;
  image: string | null;
  nb_page: number;
}

export type IBooks = IBook[];
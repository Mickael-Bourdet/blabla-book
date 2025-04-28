export interface ICategory {
  id: number;
  name: string;
}

export interface IBook {
  id: number;
  isbn: string;
  description: string | null;
  published: number | null;
  image: string | null;
  nb_page: number;
}
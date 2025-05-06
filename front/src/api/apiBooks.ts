import type { IBooks, IBook } from "../@types";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
console.log(import.meta.env.VITE_API_BASE_URL);

export async function getAllBooks(): Promise<IBooks> {
  const response = await fetch(`${apiBaseUrl}/books`);
  const books = await response.json();
  return books;
}

export async function getOneBook(id: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/books/${id}`);
  const book = await response.json();
  return book;
}

export async function searchBooks(query: string): Promise<IBook[]> {
  const response = await fetch(`${apiBaseUrl}/books?search=${encodeURIComponent(query)}`);

  const books = await response.json();
  return books;
}

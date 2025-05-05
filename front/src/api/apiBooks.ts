import type { IBooks, IBook } from "../@types";
const apiBaseUrl = "http://localhost:3000";

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

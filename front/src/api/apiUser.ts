import type { IBook } from "../@types";

const apiBaseUrl = "http://localhost:3000";

export async function addToMyReadLibrary(userId: number, bookId: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/user/${userId}/books/read/${bookId}`);
  const book = await response.json();
  return book;
}

export async function addToWishRead(userId: number, bookId: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/user/${userId}/books/to-read/${bookId}`);
  const book = await response.json();
  return book;
}
import type { IBooks } from "../@types";

const apiBaseUrl = "http://localhost:3000"

export async function getAllBooks(): Promise<IBooks> {
  const response = await fetch(`${apiBaseUrl}/books`);
  const books = await response.json();
  return books;
}
import type { IBook } from "../@types";

const apiBaseUrl = "http://localhost:3000";

export async function addToMyReadLibrary(userId: number, bookId: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/user/${userId}/books/read/${bookId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // TODO ajouter bearer token
  });
  const book = await response.json();
  return book;
}

export async function addToWishRead(userId: number, bookId: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/user/${userId}/books/to-read/${bookId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // TODO
      // "Authorization": `Bearer token`
    },
  });

  const book = await response.json();
  return book;
}
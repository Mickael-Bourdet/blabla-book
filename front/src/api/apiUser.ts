import type { IBook, IUser } from "../@types";

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

export async function deleteToMyReadLibrary(userId: number, bookId: number) {
  const response = await fetch(`${apiBaseUrl}/user/${userId}/books/read/${bookId}`, { method: "DELETE" });
  return response.ok;
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

export async function deleteToWishRead(userId: number, bookId: number) {
  const response = await fetch(`${apiBaseUrl}/user/${userId}/books/to-read/${bookId}`, { method: "DELETE" });
  return response.ok;
}

export async function getLibrary(id: number): Promise<IUser> {
  const response = await fetch(`${apiBaseUrl}/user/library/${id}`);
  const book = await response.json();
  return book;
}


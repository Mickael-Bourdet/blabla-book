import type { IBook, IUser, IUserUpdate } from "../@types";
import { authFetch } from "../utils/authFetch";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getOneUser(): Promise<IUser | null> {
  const response = await authFetch(`${apiBaseUrl}/user`);
  if (!response.ok) {
    return null; // retourne null si l'utilisateur n'existe pas
  }
  const user = await response.json();
  //console.log("je récupére un utilisateur : ", user);

  return user;
}

export const updateUser = async (data: IUserUpdate) => {
  const res = await authFetch(`${apiBaseUrl}/user`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    return null; // retourne null si l'utilisateur n'existe pas
  }

  return res.json();
};

export const deleteUser = async (): Promise<void> => {
  await authFetch(`${apiBaseUrl}/user`, {
    method: "DELETE",
  });
};

export async function addToMyReadLibrary(bookId: number): Promise<IBook> {
  const response = await authFetch(
    `${apiBaseUrl}/user/books/read/${bookId}`,
    {
      method: "POST",
      // TODO ajouter bearer token
    }
  );
  const book = await response.json();
  return book;
}

/**
 * @function deleteToMyReadLibrary
 * @description Deletes a book from the user's "read" library.
 *
 * @param {number} bookId - The ID of the book to delete.
 * @returns {Promise<boolean>} A promise that resolves to true if the deletion was successful, false otherwise.
 *
 * @throws Will throw an error if the request fails (e.g., network error or non-OK response).
 */
export async function deleteToMyReadLibrary(bookId: number): Promise<boolean> {
  try {
    const response = await authFetch(`${apiBaseUrl}/user/books/read/${bookId}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error(`Impossible de supprimer ce livre : ${response.statusText}`)
    }
    return true;

  } catch (error) {
    console.error(error);
    return false;
  }
}

/**
 * @function addToWishRead
 * @description Adds a book to the user's "to-read" (wishlist) library.
 *
 * @param {number} bookId - The ID of the book to add to the wishlist.
 * @returns {Promise<IBook>} A promise that resolves to the added book object.
 *
 * @throws Will throw an error if the request fails or the response is not OK.
 */
export async function addToWishRead(bookId: number): Promise<IBook> {
  try {
    const response = await authFetch(`${apiBaseUrl}/user/books/to-read/${bookId}`, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Impossible d'ajouter ce livre à la liste "à lire" : ${response.statusText}`)
    }

    const book = await response.json();
    return book;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteToWishRead(bookId: number) {
  const response = await authFetch(`${apiBaseUrl}/user/books/to-read/${bookId}`, { method: "DELETE" });
  return response.ok;
}

export async function getLibrary(id: number): Promise<IUser> {
  const response = await authFetch(`${apiBaseUrl}/user/library/${id}`);
  const book = await response.json();
  return book;
}


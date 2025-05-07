import type { IBook, IUser } from "../@types";
import { useAuthStore } from "../utils/store/useAuthStore";

const apiBaseUrl = "http://localhost:3000";
const token = useAuthStore.getState().token;

export async function getOneUser(): Promise<IUser | null> {
  const response = await fetch(`${apiBaseUrl}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    return null; // retourne null si l'utilisateur n'existe pas
  }
  const user = await response.json();
  //console.log("je récupére un utilisateur : ", user);

  return user;
}

export const updateUser = async (
  data: {
    name?: string;
    email?: string;
    password?: string;
    currentPassword?: string;
  } | null
) => {
  const res = await fetch(`${apiBaseUrl}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    return null; // retourne null si l'utilisateur n'existe pas
  }

  return res.json();
};

export const deleteUser = async (): Promise<void> => {
  await fetch(`${apiBaseUrl}/user`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export async function addToMyReadLibrary(bookId: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/user/books/read/${bookId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const book = await response.json();
  return book;
}

export async function deleteToMyReadLibrary(bookId: number) {
  const response = await fetch(`${apiBaseUrl}/user/books/read/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.ok;
}

export async function addToWishRead(bookId: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/user/books/to-read/${bookId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const book = await response.json();
  return book;
}

export async function deleteToWishRead(bookId: number) {
  const response = await fetch(`${apiBaseUrl}/user/books/to-read/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.ok;
}

export async function getLibrary(id: number): Promise<IUser> {
  const response = await fetch(`${apiBaseUrl}/user/library/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const book = await response.json();
  return book;
}

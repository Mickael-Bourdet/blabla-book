import type { IBook, IUser } from "../@types";

const apiBaseUrl = "http://localhost:3000";

export async function getOneUser(id: number): Promise<IUser | null> {
  const response = await fetch(`${apiBaseUrl}/user/${id}`);
  if (!response.ok) {
    return null; // retourne null si l'utilisateur n'existe pas
  }
  const user = await response.json();
  console.log("je récupére un utilisateur : ", user);
  
  return user;
}

export const updateUser = async (
  userId: number,
  data: { name?: string; email?: string; password?: string } | null
) => {
  const res = await fetch(`${apiBaseUrl}/user/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    return null; // retourne null si l'utilisateur n'existe pas
  }

  return res.json();
};

export const deleteUser = async (userId: number): Promise<void> => {
  await fetch(`http://localhost:3000/user/${userId}`, {
    method: "DELETE",
  });
};

export async function addToMyReadLibrary(
  userId: number,
  bookId: number
): Promise<IBook> {
  const response = await fetch(
    `${apiBaseUrl}/user/${userId}/books/read/${bookId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // TODO ajouter bearer token
    }
  );
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


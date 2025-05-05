import type { IBooks, IBook, IUser } from "../@types";

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


export async function getOneUser(id: number): Promise<IUser> {
  const response = await fetch(`${apiBaseUrl}/user/${id}`);
  const user = await response.json();

  return user;
}

export const updateUser = async (
  userId: number,
  data: { name?: string; email?: string; password?: string }
) => {
  const res = await fetch(`${apiBaseUrl}/user/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
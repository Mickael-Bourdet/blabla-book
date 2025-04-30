import type { IBooks, IBook, IUser } from "../@types";
import { useNavigate } from "react-router-dom";
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


export async function getOneUser(id: number): Promise<IUser | null> {
    const response = await fetch(`${apiBaseUrl}/user/${id}`);
    if (!response.ok) {
      return null; // retourne null si l'utilisateur n'existe pas
    }
    const user = await response.json();
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
  
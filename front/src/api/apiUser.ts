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

// export async function addToWishRead(userId: number, bookId: number): Promise<IBook> {
//   const response = await fetch(`${apiBaseUrl}/user/${userId}/books/to-read/${bookId}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   });
//   const book = await response.json();
//   return book;
// }

export async function addToWishRead(userId: number, bookId: number): Promise<IBook> {
  try {
    const response = await fetch(`${apiBaseUrl}/user/${userId}/books/to-read/${bookId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // TODO
        // "Authorization": `Bearer token`
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message ||
        `Erreur lors de l'ajout du livre à la liste: ${response.status} ${response.statusText}`
      );
    }

    const book = await response.json();
    return book;
  } catch (error) {
    console.error("Erreur dans addToWishRead:", error);
    throw error; // Re-throw pour que l'appelant puisse gérer l'erreur
  }
}
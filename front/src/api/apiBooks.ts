import type { IBooks, IBook, ICategory, ICategoryBooks } from "../@types";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface IBookQueryParams {
  [key: string]: string | number | boolean | undefined;
}

export async function getAllBooks(params: IBookQueryParams = {}): Promise<IBooks> {
  const urlParams = new URLSearchParams();

  // transform params in url as an object like [key, value]
  const paramsObject = Object.entries(params);

  paramsObject.forEach(([key, value]) => {
    // check if the value is undefined or null
    if (value !== undefined && value !== null) {
      // convert value into string and add it into URL params
      urlParams.append(key, value.toString());
    }
  });

  // convert urlParams object into a string
  const urlString = urlParams.toString();

  // add params in the API request if exists
  const newUrl = `${apiBaseUrl}/books/${urlString ? `?${urlString}` : ""}`;

  try {
    // request to the new url
    const response = await fetch(newUrl);
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des livres: ${response.statusText}`);
    }
    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Erreur de chargement", error);
    throw error;
  }
}

/**
 * @function getOneBook
 * @description Fetches a single book by its ID from the API.
 *
 * @param {number} id - The ID of the book to retrieve.
 * @returns {Promise<IBook>} A promise that resolves to the retrieved book object.
 *
 * @throws Will throw an error if the request fails or if the response is not OK.
 */
export async function getOneBook(id: number): Promise<IBook> {
  try {
    const response = await fetch(`${apiBaseUrl}/books/${id}`);

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des livres: ${response.statusText}`);
    }

    const book = await response.json();
    return book;

  } catch (error) {
    console.error("Erreur de chargement", error);
    throw error;
  }
}

export async function searchBooks(query: string): Promise<IBook[]> {
  try {
    const response = await fetch(`${apiBaseUrl}/books?search=${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des livres: ${response.statusText}`);
    }

    const books = await response.json();
    return books;

  } catch (error) {
    console.error("Erreur de chargement", error);
    throw error;
  }
}

export async function getAllCategories(): Promise<ICategory[]> {
  try {
    const response = await fetch(`${apiBaseUrl}/categories`);
    if (response.ok && response.status === 200) {
      const categories = await response.json();
      return categories;
    }
    return [];
  } catch (error) {
    console.error("Erreur lors du chargement", error);
    return [];
  }
}
export async function getBooksByCategories(id: number): Promise<ICategoryBooks | null> {
  try {
    const response = await fetch(`${apiBaseUrl}/categories/${id}/books`);
    if (response.ok && response.status === 200) {
      const categoriesWithBooks = await response.json();
      return categoriesWithBooks;
    }
    return null;
  } catch (error) {
    console.error("Erreur lors du chargement", error);
    return null;
  }
}

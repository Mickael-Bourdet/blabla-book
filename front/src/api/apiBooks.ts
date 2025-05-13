import type { IBooks, IBook, ICategory, ICategoryBooks, IBookWithCategories } from "../@types";
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

export async function getOneBook(id: number): Promise<IBook> {
  const response = await fetch(`${apiBaseUrl}/books/${id}`);
  const book = await response.json();
  return book;
}

export async function searchBooks(query: string): Promise<IBook[]> {
  const response = await fetch(`${apiBaseUrl}/books?search=${encodeURIComponent(query)}`);

  const books = await response.json();
  return books;
}

/**
 * Function to fetch all categories.
 *
 * @returns {Promise<ICategory[]>} - A promise that resolves to an array of category objects.
 * @throws {Error} - Throws an error if the request fails or if there is an issue with the network.
 */
export async function getAllCategories(): Promise<ICategory[]> {
  // Request parameters optimized to fetch only categories
  const url = `${apiBaseUrl}/books?fields=categories`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des catégories: ${response.statusText}`);
    }

    const data = (await response.json()) as IBookWithCategories[];

    // Extract all categories from all books
    const allCategories = data.flatMap((book) => book.categories || []);

    // Filter to keep only unique categories (by ID)
    const uniqueCategories = Array.from(new Map(allCategories.map((category) => [category.id, category])).values());
    return uniqueCategories;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
    throw error;
  }
}

/**
 * Function to fetch books by category.
 *
 * @param {number} id - The ID of the category for which books are to be fetched.
 * @returns {Promise<ICategoryBooks | null>} - A promise that resolves to a category object with books or `null` if the request fails.
 * @throws {Error} - Throws an error if the request fails or if there is an issue with the network.
 */
export async function getBooksByCategories(id: number): Promise<IBook[]> {
  const url = `${apiBaseUrl}/books?categoryId=${id}`;
  try {
    const response = await fetch(url);
    if (response.ok && response.status === 200) {
      const categoriesWithBooks = await response.json();
      console.log(categoriesWithBooks);
      return categoriesWithBooks;
    }
    return [];
  } catch (error) {
    console.error("Erreur lors du chargement", error);
    return [];
  }
}

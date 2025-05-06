import type { IBooks, IBook } from "../@types";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getAllBooks(params = {}): Promise<IBooks> {
  const urlParams = new URLSearchParams();

  // transform params as an object like [key, value]
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

  // request to the new URL
  const response = await fetch(newUrl);
  const books = await response.json();
  return books;
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

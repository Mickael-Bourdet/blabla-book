import type { IBooks, IBook, ICategory, IAuthor } from "../@types";
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

export async function searchBooks(query: string): Promise<{ books: IBook[]; authors: IAuthor[] }> {
  try {
    console.log(`Sending search request for: "${query}"`);
    const response = await fetch(`${apiBaseUrl}/books?query=${encodeURIComponent(query)}`);

    // Vérification approfondie de la réponse
    if (!response.ok) {
      console.error(`API error: ${response.status} ${response.statusText}`);
      // Essayons de lire le message d'erreur du serveur si possible
      try {
        const errorData = await response.json();
        console.error("Server error details:", errorData);
      } catch (jsonError) {
        // Si on ne peut pas lire le JSON, on ignore silencieusement
      }

      // Lancer une erreur avec un message plus descriptif
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("API response data structure:", Object.keys(data));

    // Vérifier si les données sont dans le format attendu et les adapter si nécessaire
    if (Array.isArray(data)) {
      // L'API renvoie directement un tableau de livres (ancien format)
      console.log("Converting array response to expected format");
      return {
        books: data,
        authors: [],
      };
    } else if (data.books || data.authors) {
      // Format attendu avec books et authors
      return {
        books: Array.isArray(data.books) ? data.books : [],
        authors: Array.isArray(data.authors) ? data.authors : [],
      };
    } else {
      // Autre format inattendu
      console.warn("Unexpected API response format:", data);
      return { books: [], authors: [] };
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    return { books: [], authors: [] };
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
export async function getBooksByCategories(): Promise<ICategory[]> {
  try {
    const response = await fetch(`${apiBaseUrl}/categories/books`);
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

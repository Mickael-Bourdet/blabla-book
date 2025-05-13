import type { IBook, IUser, IUserUpdate } from "../@types";
import { IError } from "../@types/auth";
import { authFetch } from "../utils/authFetch";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


// get the current user
// return null if user does not exist
export async function getOneUser(): Promise<IUser | null> {
    try{
  const response = await authFetch(`${apiBaseUrl}/user`);
  if (!response.ok) {
    return null; // null if the user doesn't exist
  }
  const user = await response.json();

// return user data
  return user;


} catch (error) {
    console.error("Erreur de chargement", error);
    throw error;
  }
}


// update user data
// throw error if request failed
export const updateUser = async (data: IUserUpdate) => {
  try {
    const res = await authFetch(`${apiBaseUrl}/user`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });

    const resData = await res.json();

 // if request failed build and throw error
    if (!res.ok) {
      const error: IError = {
        message: resData.message || "Erreur inconnue",
        status: resData.status,
        errors: resData.errors,
      };
      throw error;
    }

// return updated user
    return resData;
  } catch (error) {
    console.log("❌ Erreur capturée :", error);
    throw error;
  }
};

// delete current user
export const deleteUser = async (): Promise<void> => {
    try {
        const res = await authFetch(`${apiBaseUrl}/user`, {
          method: "DELETE",
        })
        if (!res.ok) {
            const resData = await res.json()
            const error: IError = {
              message: resData.message || "unknown error",
              status: resData.status,
              errors: resData.errors,
            }
            throw error
          }
        } catch (error) {
          console.error("❌ error in deleteUser", error)
          throw error
        }

};



export async function addToMyReadLibrary(bookId: number): Promise<IBook> {
  const response = await authFetch(`${apiBaseUrl}/user/books/read/${bookId}`, {
    method: "POST",
    // TODO ajouter bearer token
  });
  const book = await response.json();
  return book;
}

export async function deleteToMyReadLibrary(bookId: number) {
  const response = await authFetch(`${apiBaseUrl}/user/books/read/${bookId}`, {
    method: "DELETE",
  });
  return response.ok;
}

export async function addToWishRead(bookId: number): Promise<IBook> {
  const response = await authFetch(
    `${apiBaseUrl}/user/books/to-read/${bookId}`,
    {
      method: "POST",
    }
  );
  const book = await response.json();
  return book;
}

export async function deleteToWishRead(bookId: number) {
  const response = await authFetch(
    `${apiBaseUrl}/user/books/to-read/${bookId}`,
    { method: "DELETE" }
  );
  return response.ok;
}

export async function getLibrary(id: number): Promise<IUser> {
  const response = await authFetch(`${apiBaseUrl}/user/library/${id}`);
  const book = await response.json();
  return book;
}

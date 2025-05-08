import { Router } from "express";
import { userLibraryController } from "../controller/userLibraryController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

/**
* GET /user/library
* @summary Return the library of a specific user, including their books.
* @param {number} userId - The ID of the user whose library is being fetched.
* @return {User} 200 - Success response with the user's library data.
* @throws {Error} User not found (404) - If the user is not found.
*/
router.get("/user/library", authMiddleware, userLibraryController.getLibrary);

// Read

/**
 * POST /user/books/read/:bookId
 * @summary Add a book to the "already read" list of a user
 * @param {number} userId.path.required - The ID of the user
 * @param {number} bookId.path.required - The ID of the book
 * @return {object} 200 - Success message
 */
router.post("/user/books/read/:bookId", authMiddleware, userLibraryController.addToMyReadLibrary);

/**
 * DELETE /user/books/read/:bookId
 * @summary Remove a book from the "already read" list of a user
 * @param {number} userId.path.required - The ID of the user
 * @param {number} bookId.path.required - The ID of the book
 * @return {object} 200 - Success message
 */
router.delete("/user/books/read/:bookId", authMiddleware, userLibraryController.deleteToMyReadLibrary);


// To Read

/**
 * POST /user/books/to-read/:bookId
 * @summary Add a book to the "to read" list of a user
 * @param {number} userId.path.required - The ID of the user
 * @param {number} bookId.path.required - The ID of the book
 * @return {object} 200 - Success message
 */
router.post("/user/books/to-read/:bookId", authMiddleware, userLibraryController.addToWishRead);

/**
 * DELETE /user/books/to-read/:bookId
 * @summary Remove a book from the "to read" list of a user
 * @param {number} userId.path.required - The ID of the user
 * @param {number} bookId.path.required - The ID of the book
 * @return {object} 200 - Success message
 */
router.delete("/user/books/to-read/:bookId", authMiddleware, userLibraryController.deleteToWishRead);
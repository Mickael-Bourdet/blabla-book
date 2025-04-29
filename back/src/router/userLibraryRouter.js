import { Router } from "express";
import { userLibraryController } from "../controller/userLibraryController.js";


export const router = Router();


/**
 * GET /books
 * @summary Return all books of one user
 * @param {number} userId.path.required - ID of the user
 * @return {User} 200 - success response
 */
router.get("/user/library/:userId", userLibraryController.getLibrary);


//Read
/**
 * POST /user/:userId/books/read/:bookId
 * @summary Add a book to the "already read" list of a user
 * @param {number} userId.path.required - ID of the user
 * @param {number} bookId.path.required - ID of the book
 * @return {object} 200 - success message
 */
router.post("/user/:userId/books/read/:bookId", userLibraryController.addToMyReadLibrary);

/**
 * DELETE /user/:userId/books/read/:bookId
 * @summary Remove a book from the "already read" list of a user
 * @param {number} userId.path.required - ID of the user
 * @param {number} bookId.path.required - ID of the book
 * @return {object} 200 - success message
 */
router.delete("/user/:userId/books/read/:bookId",userLibraryController.deleteToMyReadLibrary);


//Toread

/**
 * POST /user/:userId/books/to-read/:bookId
 * @summary Add a book to the "to read" list of a user
 * @param {number} userId.path.required - ID of the user
 * @param {number} bookId.path.required - ID of the book
 * @return {object} 200 - success message
 */
router.post("/user/:userId/books/to-read/:bookId", userLibraryController.addToWishRead);

/**
 * DELETE /user/:userId/books/to-read/:bookId
 * @summary Remove a book from the "to read" list of a user
 * @param {number} userId.path.required - ID of the user
 * @param {number} bookId.path.required - ID of the book
 * @return {object} 200 - success message
 */
router.delete("/user/:userId/books/to-read/:bookId",userLibraryController.deleteToWishRead);

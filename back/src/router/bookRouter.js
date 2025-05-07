import { Router } from "express";
import { bookController } from "../controller/bookController.js";

export const router = Router();

/**
 * GET /books
 * @summary Return all books
 * @return {Book[]} 200 - success response
 */
router.get("/books", bookController.getAllBooks);

/**
 * GET /books/:bookId
 * @summary Return the book corresponding to the requested ID
 * @param {number} - The book ID
 * @return {Book} 200 - success response
 * @return {Error} 404 - Not found response
 */
router.get("/books/:bookId", bookController.getOneBook);
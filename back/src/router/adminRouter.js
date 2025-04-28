import { Router } from "express";
import adminController from "../controller/adminController.js";
import { validate } from "../middlewares/validateWrapper.js";
import { authorController } from "../controller/authorController.js";
import { authorValidate } from "../middlewares/schemaValidate/authorValidate.js";
import { createBookSchema, updateBookSchema } from "../middlewares/schemaValidate/bookValidate.js";
export const router = Router();

/**
 * POST/admin/add/books
 * @summary add a new book
 * @return {Book} 201 - the added book
 * @return {Error} 400 - Bad request response (missing property)
 * @return {Error} 409 - Conflict response (ex: isbn already taken)
 */
router.post("/admin/add/books", validate(createBookSchema), adminController.AddNewBook);

/**
 * PATCH /admin/update/books/:bookId
 * @summary Edit a book
 * @return {Book} 200 - success response
 * @return {Error} 400 - Bad request response
 * @return {Error} 404 - Book not found
 * @return {Error} 409 - Conflict response (ex: isbn already taken)
 */
router.patch("/admin/update/books/:bookId", validate(updateBookSchema), adminController.updateBook);

/**
 * DELETE /admin/delete/books/:bookId
 * @summary delete a book
 * @return {Book} 204 - success response no content send
 * @return {Error} 404 - Book not found
 */
router.delete("/admin/delete/books/:bookId", adminController.deleteBook);

router.post("/admin/add/authors", validate(authorValidate), authorController.addAuthor);
router.patch("/admin/update/authors/:authorId", validate(authorValidate), authorController.updateAuthor);
router.delete("/admin/delete/authors/:authorId", authorController.deleteAuthor);

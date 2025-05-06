import { Router } from "express";
import adminController from "../controller/adminController.js";
import { validate } from "../middlewares/validateWrapper.js";
import { categorySchema } from "../middlewares/schemaValidate/categoryValidateSchema.js";
import { authorValidate } from "../middlewares/schemaValidate/authorValidateSchema.js";
import { createBookSchema, updateBookSchema } from "../middlewares/schemaValidate/bookValidateSchema.js";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

/**
 * POST/admin/add/books
 * @summary add a new book
 * @return {Book} 201 - the added book
 * @return {Error} 400 - Bad request response (missing property)
 * @return {Error} 409 - Conflict response (ex: isbn already taken)
 */
router.post("/admin/add/books", authMiddleware, isAdminMiddleware, validate(createBookSchema), adminController.AddNewBook);

/**
 * PATCH /admin/update/books/:bookId
 * @summary Edit a book
 * @return {Book} 200 - success response
 * @return {Error} 400 - Bad request response
 * @return {Error} 404 - Book not found
 * @return {Error} 409 - Conflict response (ex: isbn already taken)
 */
router.patch("/admin/update/books/:bookId", authMiddleware, isAdminMiddleware, validate(updateBookSchema), adminController.updateBook);

/**
 * DELETE /admin/delete/books/:bookId
 * @summary delete a book
 * @return {Book} 204 - success response no content send
 * @return {Error} 404 - Book not found
 */
router.delete("/admin/delete/books/:bookId", authMiddleware, isAdminMiddleware, adminController.deleteBook);

// TODO : add comments
router.post("/admin/add/categories", authMiddleware, isAdminMiddleware, validate(categorySchema), adminController.createCategory);
router.patch("/admin/update/categories/:categoryId", authMiddleware, isAdminMiddleware, validate(categorySchema), adminController.updateCategory);
router.delete("/admin/delete/categories/:categoryId", authMiddleware, isAdminMiddleware, adminController.deleteCategory);

// TODO : add comments
router.post("/admin/add/authors", authMiddleware, isAdminMiddleware, validate(authorValidate), adminController.addAuthor);
router.patch("/admin/update/authors/:authorId", authMiddleware, isAdminMiddleware, validate(authorValidate), adminController.updateAuthor);
router.delete("/admin/delete/authors/:authorId", authMiddleware, isAdminMiddleware, adminController.deleteAuthor);

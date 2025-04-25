import { Router } from "express";
import adminController from "../controller/adminController.js";

export const router = Router();

/**
 * POST /admin/add/books
 * @summary add a new book
 * @param {AddNewBookDTO} request.body.required - the book body
 * @return {Book} 201 - the added book
 * @return {Error} 400 - Bad request response (missing property)
 * @return {Error} 409 - Conflict response (ex: isbn already taken)
 */

router.post(
  "/admin/add/books",
  validate(createBookSchema),
  adminController.AddNewBook
);

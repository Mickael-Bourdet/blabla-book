import { Router } from "express";
import { categoryController } from "../controller/categoryController.js";

export const router = Router();

/**
 * GET /categories
 * @summary Return all categories
 * @return {Category[]} 200 - success response
 */
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:categoryId/books", categoryController.getBooksByCategories);

// TODO : delete this page

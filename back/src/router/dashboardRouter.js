import { Router } from "express";
import { dashboardController } from "../controller/dashboardController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware.js";

export const router = Router();

/**
 * GET /dashboard/users
 * @summary Retrieve all users (admin only).
 * @return {Object} - The response object with the list of users.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/users", authMiddleware, isAdminMiddleware, dashboardController.getAllUsers);

/**
 * GET /dashboard/categories
 * @summary Retrieve all categories (admin only).
 * @return {Object} - The response object with the list of categories.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/categories", authMiddleware, isAdminMiddleware, dashboardController.getAllCategories);

/**
 * GET /dashboard/authors
 * @summary Retrieve all authors (admin only).
 * @return {Object} - The response object with the list of authors.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/authors", authMiddleware, isAdminMiddleware, dashboardController.getAllAuthors);

/**
 *
 * @summary
 * @return {Object}
 * @return {Error}
 */
router.get("/dashboard/reviews", authMiddleware, isAdminMiddleware, dashboardController.getAllReview);

/**
 *
 * @summary
 * @return {Object}
 * @return {Error}
 */
router.get("/dashboard/user/:userId/reviews", authMiddleware, isAdminMiddleware, dashboardController.getReviewsByUser);

/**
 *
 * @summary
 * @return {Object}
 * @return {Error}
 */
router.get("/dashboard/book/:bookId/reviews", authMiddleware, isAdminMiddleware, dashboardController.getReviewsByBook);
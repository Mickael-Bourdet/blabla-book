import { Router } from "express";
import { dashboardController } from "../controller/dashboardController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware.js";

export const router = Router();

/**
 * GET route to retrieve all users (admin only).
 *
 * @summary Get all users in the system.
 * @route GET /dashboard/users
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware isAdminMiddleware - Ensures the user is an admin.
 * @controller dashboardController.getAllUsers - Handles retrieving all users.
 * @return {Object} - The list of all users in the system.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/users", authMiddleware, isAdminMiddleware, dashboardController.getAllUsers);

/**
 * GET route to retrieve all categories (admin only).
 *
 * @summary Get all book categories in the system.
 * @route GET /dashboard/categories
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware isAdminMiddleware - Ensures the user is an admin.
 * @controller dashboardController.getAllCategories - Handles retrieving all categories.
 * @return {Object} - The list of all book categories in the system.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/categories", authMiddleware, isAdminMiddleware, dashboardController.getAllCategories);

/**
 * GET route to retrieve all authors (admin only).
 *
 * @summary Get all authors in the system.
 * @route GET /dashboard/authors
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware isAdminMiddleware - Ensures the user is an admin.
 * @controller dashboardController.getAllAuthors - Handles retrieving all authors.
 * @return {Object} - The list of all authors in the system.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/authors", authMiddleware, isAdminMiddleware, dashboardController.getAllAuthors);

/**
 * GET route to retrieve all reviews (admin only).
 *
 * @summary Get all reviews in the system.
 * @route GET /dashboard/reviews
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware isAdminMiddleware - Ensures the user is an admin.
 * @controller dashboardController.getAllReview - Handles retrieving all reviews.
 * @return {Object} - The list of all reviews in the system.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/reviews", authMiddleware, isAdminMiddleware, dashboardController.getAllReview);

/**
 * GET route to retrieve reviews made by a specific user (admin only).
 *
 * @summary Get all reviews made by a specific user.
 * @route GET /dashboard/user/:userId/reviews
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware isAdminMiddleware - Ensures the user is an admin.
 * @controller dashboardController.getReviewsByUser - Handles retrieving the user's reviews.
 * @return {Object} - The list of reviews made by the user.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/user/:userId/reviews", authMiddleware, isAdminMiddleware, dashboardController.getReviewsByUser);


import { Router } from "express";
import { reviewController } from "../controller/reviewController.js";
import { validate } from "../middlewares/validateWrapper.js";
import { reviewSchema }  from "../middlewares/schemaValidate/reviewValidateSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

/**
 * POST route to create a review for a specific book.
 *
 * @summary Create a new review for a book.
 * @route POST /user/books/:bookId/review
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware validate(reviewSchema) - Validates the request body against the review schema.
 * @controller reviewController.createReview - Handles the review creation.
 * @return {Object} - The created review data.
 * @return {Error} - Error if the request fails.
 */
router.post("/user/books/:bookId/review", authMiddleware, validate(reviewSchema), reviewController.createReview);

/**
 * GET route to retrieve reviews for a specific book (admin only).
 *
 * @summary Get all reviews for a specific book.
 * @route GET /dashboard/book/:bookId/reviews
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @middleware isAdminMiddleware - Ensures the user is an admin.
 * @controller dashboardController.getReviewsByBook - Handles retrieving the book reviews.
 * @return {Object} - The list of reviews for the book.
 * @return {Error} - Error if the request fails.
 */
router.get("/dashboard/book/:bookId/reviews", authMiddleware, isAdminMiddleware, dashboardController.getReviewsByBook);
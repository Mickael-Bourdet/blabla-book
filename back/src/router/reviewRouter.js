import { Router } from "express";
import { reviewController } from "../controller/reviewController.js";
import { validate } from "../middlewares/validateWrapper.js";
import { reviewSchema }  from "../middlewares/schemaValidate/reviewValidateSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

/**
 *
 * @summary
 * @return {Object}
 * @return {Error}
 */
router.post("/user/books/:bookId/review", authMiddleware, validate(reviewSchema), reviewController.createReview);
import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { authController } from "../controller/authController.js";
import { registerSchema } from "../middlewares/schemaValidate/authValidateSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

/**
 * POST route to register a new user.
 *
 * @summary Register a new user.
 * @route POST /register
 * @middleware validate(registerSchema) - Validates the request body against the registration schema.
 * @controller authController.register - Handles user registration.
 * @return {Object} - The registered user data and authentication token.
 * @return {Error} - Error if registration fails.
 */
router.post("/register", validate(registerSchema), authController.register);

/**
 * POST route to log in a user.
 *
 * @summary Log in a user.
 * @route POST /login
 * @controller authController.login - Handles user login.
 * @return {Object} - The authenticated user data and authentication token.
 * @return {Error} - Error if login fails.
 */
router.post("/login", authController.login);

/**
 * POST route to log out a user.
 *
 * @summary Log out a user.
 * @route POST /logout
 * @middleware authMiddleware - Ensures the user is authenticated.
 * @controller authController.logout - Handles user logout.
 * @return {Object} - Confirmation of successful logout.
 * @return {Error} - Error if logout fails.
 */
router.post("/logout", authMiddleware, authController.logout);
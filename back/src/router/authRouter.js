import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { authController } from "../controller/authController.js";
import { registerSchema } from "../middlewares/schemaValidate/authValidateSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

/**
 * POST /register
 * @summary Register a new user.
 * @return {Object} - The newly created user object.
 * @return {Error} - Error if the registration fails.
 */
router.post("/register", validate(registerSchema), authController.register);

/**
 * POST /login
 * @summary Log in an existing user.
 * @return {Object} - The JWT token and expiration time.
 * @return {Error} - Error if the login fails.
 */
router.post("/login", authController.login);

/**
 * POST /logout
 * @summary Log out the currently authenticated user.
 * @return {Object} - Success message or status.
 * @return {Error} - Error if the logout fails.
 */
router.post("/logout", authMiddleware, authController.logout);


router.get("/users", authController.users)
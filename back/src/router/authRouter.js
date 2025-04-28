import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { authController } from "../controller/authController.js";
import { registerSchema } from "../middlewares/schemaValidate/authValidateSchema.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

router.get("/users", authController.users);
/**
 * POST
 * @summary 
 * @return {Book}
 * @return {Error}
 * @return {Error}
 */
router.post("/register", validate(registerSchema), authController.register);

/**
 * POST
 * @summary 
 * @return {Book}
 * @return {Error}
 * @return {Error}
 */
router.post("/login", authController.login);

/**
 * POST
 * @summary 
 * @return {Book}
 * @return {Error}
 * @return {Error}
 */
router.post("/logout", authMiddleware, logout);
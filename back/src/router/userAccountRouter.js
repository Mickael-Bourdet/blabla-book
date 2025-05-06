import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { UpdateUserSchema } from "../middlewares/schemaValidate/userValidateSchema.js";
import { userController } from "../controller/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = Router();

// Get one user
/**
 * GET /user/:userId
 * @summary Retrieve information about a specific user.
 * @param {number} userId.path.required - The ID of the user.
 * @return {object} 200 - Success response with the user's data.
 * @throws {Error} User not found (404) - If the user does not exist.
 */
router.get("/user/:userId", authMiddleware, userController.getOneUser);

// Update user information
/**
 * PATCH /user/:userId
 * @summary Update a specific user's information (name, email, password).
 * @param {number} userId.path.required - The ID of the user to update.
 * @param {object} - The user data to update (email, name, password).
 * @return {object} 200 - Success response with the updated user data.
 * @throws {Error} User not found (404) - If the user does not exist.
 */
router.patch("/user/:userId", validate(UpdateUserSchema), userController.updateUser);

// Delete a user
/**
 * DELETE /user/:userId
 * @summary Delete a specific user from the system.
 * @param {number} userId.path.required - The ID of the user to delete.
 * @return {object} 200 - Success response with a message confirming deletion.
 * @throws {Error} User not found (404) - If the user does not exist.
 */
router.delete("/user/:userId", validate(UpdateUserSchema), userController.deleteUser);

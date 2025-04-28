import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { schema } from "../middlewares/schemaValidate/userValidateSchema.js";
import { userController } from "../controller/userController.js";

export const router = Router();

// TODO : comments
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId", validate(schema), userController.updateUser);
router.delete("/user/:userId", validate(schema), userController.deleteUser);

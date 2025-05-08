import { Router } from "express";
import { dashboardController } from "../controller/dashboardController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware.js";

export const router = Router();

router.get("/dashboard/users", authMiddleware, isAdminMiddleware, dashboardController.getAllUsers);
router.get("/dashboard/categories", authMiddleware, isAdminMiddleware, dashboardController.getAllCategories);
router.get("/dashboard/authors", authMiddleware, isAdminMiddleware, dashboardController.getAllAuthors);
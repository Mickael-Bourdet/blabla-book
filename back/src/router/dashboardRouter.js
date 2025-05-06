import { Router } from "express";
import dashboardController from "../controller/dashboardController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { isAdminMiddleware } from "../middlewares/isAdminMiddleware";

export const router = Router();

router.get("/dashboard/categories", authMiddleware, isAdminMiddleware, dashboardController.getAllCategories);
router.get("/dashboard/users", authMiddleware, isAdminMiddleware, dashboardController.getAllUsers);
router.get("/dashboard/authors", authMiddleware, isAdminMiddleware, dashboardController.getAllAuthors);
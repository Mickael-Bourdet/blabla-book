import { Router } from "express";
import dashboardController from "../controller/dashboardController";

export const router = Router();

router.get("/dashboard/categories", dashboardController.getAllCategories);
router.get("/dashboard/users", dashboardController.getAllUsers);
router.get("/dashboard/authors", dashboardController.getAllAuthors);
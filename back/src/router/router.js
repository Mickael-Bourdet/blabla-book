import { Router } from "express";
import { router as bookRouter } from "./bookRouter.js";
import { router as userLibraryRouter } from "./userLibraryRouter.js";
import { router as userAccountRouter } from "./userAccountRouter.js";
import { router as adminRouter } from "./adminRouter.js";
import { router as authRouter } from "./authRouter.js";
import { router as dashboard } from "./dashboardRouter.js";
import { router as review } from "./reviewRouter.js";

// Main API router
const router = Router();

// sub router here
router.use(bookRouter);
router.use(userLibraryRouter);
router.use(userAccountRouter);
router.use(adminRouter);
router.use(authRouter);
router.use(review);

// Use the dashboard router to handle admin operations for categories, authors, and users.
// This includes routes for:
// - Creating, updating, and deleting categories
// - Creating, updating, and deleting authors
// - Creating, updating, and deleting users
router.use(dashboard);

export { router };

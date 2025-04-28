import { Router } from "express";
import { router as bookRouter } from "./bookRouter.js";
import { router as userLibraryRouter } from "./userLibraryRouter.js";
import { router as userAccountRouter } from "./userAccountRouter.js";
import { router as adminRouter } from "./adminRouter.js";

// Main API router
const router = Router();

// sub router here
router.use(bookRouter);
router.use(userLibraryRouter);
router.use(userAccountRouter);
router.use(adminRouter);

export { router };

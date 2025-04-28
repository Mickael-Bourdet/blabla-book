import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { userLibraryController } from "../controller/userLibraryController.js";
import { schema } from "../middlewares/schemaValidate/userValidateSchema.js";
import { router as bookRouter } from "./bookRouter.js";
import { router as userAccountRouter } from "./userAccountRouter.js";
import { router as adminRouter } from "./adminRouter.js";

// Main API router
const router = Router();

//userLibrary Routes
router.get("/user/library/:userId", userLibraryController.getLibrary);

//Read
router.post("/user/:userId/books/read/:bookId", validate(schema), userLibraryController.addRead);
router.delete("/user/:userId/books/read/:bookId", validate(schema), userLibraryController.deleteRead);

//Toread
router.post("/user/:userId/books/to-read/:bookId", validate(schema), userLibraryController.addToRead);
router.delete("/user/:userId/books/to-read/:bookId", validate(schema), userLibraryController.deleteToRead);

// sub router here

router.use(bookRouter);
router.use(userAccountRouter);
router.use(adminRouter);
export { router };

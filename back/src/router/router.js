import { Router } from "express";
import { authorController } from "../controller/authorController.js";
import { authorValidate } from "../middlewares/schemaValidate/authorValidate.js";
import { validate } from "../middlewares/validateWrapper.js";
import { userController } from "../controller/userController.js";
import { userLibraryController } from "../controller/userLibraryController.js";
import { schema } from "../middlewares/schemaValidate/userValidateSchema.js";
import { router as bookRouter } from "./bookRouter.js";
import { router as adminRouter } from "./adminRouter.js";

// Main API router
const router = Router();

// Admin routes
router.post("/admin/add/authors", validate(authorValidate), authorController.addAuthor);

router.patch("/admin/update/authors/:authorId", validate(authorValidate), authorController.updateAuthor);
router.patch("/admin/update/:categoryId", validate(authorValidate), authorController.updateAuthor);

router.delete("/admin/delete/authors/:authorId", authorController.deleteAuthor);

//User Routes
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId", validate(schema), userController.updateUser);
router.delete("/user/:userId", validate(schema), userController.deleteUser);

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
router.use(adminRouter);
export { router };

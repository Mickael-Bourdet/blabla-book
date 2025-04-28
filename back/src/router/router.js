import { Router } from "express";
import { bookController } from "../controller/bookController.js";
import { authorController } from "../controller/authorController.js";
import { authorValidate } from "../middlewares/schemaValidate/authorValidate.js";
import { validate } from "../middlewares/validateWrapper.js";
import { userController } from "../controller/userController.js";
import { userLibraryController } from "../controller/userLibraryController.js";
import { schema } from "../middlewares/userValidateSchema.js";
import { router as adminRouter } from "./adminRouter.js";

const router = Router();

// Library routes
router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

// Admin routes

router.patch("/admin/update/:authorId", validate(authorValidate), authorController.updateAuthor);
router.patch("/admin/update/:categoryId", validate(authorValidate), authorController.updateAuthor);
router.patch("/admin/update/:bookId", validate(authorValidate), authorController.updateAuthor);

router.post("/admin/add/authors", validate(authorValidate), authorController.addAuthor);

router.delete("/admin/delete/:authorId", authorController.deleteAuthor);

//User Routes
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId", validate(schema), userController.updateUser);
router.delete("/user/:userId", validate(schema), userController.deleteUser);

//userLibrary Routes
router.get("/user/library/:userId", userLibraryController.getLibrary);

//Read
router.post("/user/:userId/books/read/:bookId",validate(schema), userLibraryController.addRead);
router.delete("/user/:userId/books/read/:bookId",validate(schema), userLibraryController.deleteRead);

//Toread
router.post("/user/:userId/books/to-read/:bookId",validate(schema), userLibraryController.addToRead);
router.delete("/user/:userId/books/to-read/:bookId",validate(schema), userLibraryController.deleteToRead);

// sub router here
router.use(adminRouter);
export { router };

import { Router } from "express";
import { bookController } from "./controller/bookController.js";
import { userController } from "./controller/userController.js";
import {userLibraryController} from "./controller/userLibraryController.js"
import { validate } from "./middlewares/validateWrapper.js";
import { schema } from "./middlewares/schemaValidate/userValidateSchema.js";


const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);


//User Routes
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId",validate(schema), userController.updateUser);
router.delete("/user/:userId", validate(schema),userController.deleteUser);

//userLibrary Routes
router.get("/user/library/:userId", userLibraryController.getLibrary);

//Read
router.post("/user/:userId/books/read/:bookId",validate(schema), userLibraryController.addRead);
router.delete("/user/:userId/books/read/:bookId",validate(schema), userLibraryController.deleteRead);

//Toread
router.post("/user/:userId/books/to-read/:bookId",validate(schema), userLibraryController.addToRead);
router.delete("/user/:userId/books/to-read/:bookId",validate(schema), userLibraryController.deleteToRead);


export { router };

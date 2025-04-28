import { Router } from "express";
import { validate } from "../middlewares/validateWrapper.js";
import { userLibraryController } from "../controller/userLibraryController.js";
import { schema } from "../middlewares/schemaValidate/userValidateSchema.js";

export const router = Router();

// TODO : add comments
//userLibrary Routes
router.get("/user/library/:userId", userLibraryController.getLibrary);

//Read
router.post("/user/:userId/books/read/:bookId", validate(schema), userLibraryController.addRead);
router.delete("/user/:userId/books/read/:bookId", validate(schema), userLibraryController.deleteRead);

//Toread
router.post("/user/:userId/books/to-read/:bookId", validate(schema), userLibraryController.addToRead);
router.delete("/user/:userId/books/to-read/:bookId", validate(schema), userLibraryController.deleteToRead);

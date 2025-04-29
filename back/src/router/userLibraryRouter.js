import { Router } from "express";
import { userLibraryController } from "../controller/userLibraryController.js";


export const router = Router();

// TODO : add comments
/**
 * GET /books
 * @summary Return all books of one user
 * @return {User[]} 200 - success response
 */
router.get("/user/library/:userId", userLibraryController.getLibrary);

//Read
router.post("/user/:userId/books/read/:bookId", userLibraryController.addToMyReadLibrary);
router.delete("/user/:userId/books/read/:bookId",userLibraryController.deleteToMyReadLibrary);

//Toread
router.post("/user/:userId/books/to-read/:bookId", userLibraryController.addToWishRead);
router.delete("/user/:userId/books/to-read/:bookId",userLibraryController.deleteToWishRead);

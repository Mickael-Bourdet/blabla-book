import { Router } from "express";
import { bookController } from "./controller/bookController.js";

const router = Router();

router.get("/books", bookController.getAllBooks);
// \\d+ is a regex ton check if the user put an integer in the url
router.get("/books/:bookId(\\d+)", bookController.getOneBook);

export { router };
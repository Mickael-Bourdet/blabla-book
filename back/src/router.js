import { Router } from "express";
import { bookController } from "./controller/bookController.js";

const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

export { router };

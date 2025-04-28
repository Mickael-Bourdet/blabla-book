import { Router } from "express";
import { bookController } from "../controller/bookController.js";

export const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

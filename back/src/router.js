import { Router } from "express";
import { bookController } from "./controller/bookController.js";
import { authorController } from "./controller/authorController.js";

const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

router.patch("/admin/update/:authorId", authorController.updateAuthor);

export { router };

import { Router } from "express";
import { bookController } from "./controller/bookController.js";
import { authorController } from "./controller/authorController.js";
import { authorValidate } from "./middlewares/schemaValidate/authorValidate.js";
import { validate } from "./middlewares/validateWrapper.js";

const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

router.patch("/admin/update/:authorId", validate(authorValidate), authorController.updateAuthor);
router.delete("/admin/delete/:authorId", authorController.deleteAuthor);

export { router };

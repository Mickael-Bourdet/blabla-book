import { Router } from "express";
import { bookController } from "../controller/bookController.js";
import { router as adminRouter } from "./adminRouter.js";
const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

// sub router here
router.use(adminRouter);
export { router };

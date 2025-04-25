import { Router } from "express";
import { bookController } from "./controller/bookController.js";
import { userController } from "./controller/userController.js";


const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);


//User Routes
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId", userController.updateUser);
router.delete("/user/:userId", userController.deleteUser);

export { router };

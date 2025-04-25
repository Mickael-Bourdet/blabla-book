import { Router } from "express";
import { bookController } from "./controller/bookController.js";
import { userController } from "./controller/userController.js";
import { validate } from "./middlewares/validateWrapper.js";
import { schema } from "./middlewares/userValidateSchema.js";


const router = Router();

router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);


//User Routes
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId",validate(schema), userController.updateUser);
router.delete("/user/:userId", validate(schema),userController.deleteUser);

export { router };

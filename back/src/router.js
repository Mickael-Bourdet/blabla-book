import { Router } from "express";
import { bookController } from "./controller/bookController.js";
import { authorController } from "./controller/authorController.js";
import { authorValidate } from "./middlewares/schemaValidate/authorValidate.js";
import { validate } from "./middlewares/validateWrapper.js";
import { userController } from "./controller/userController.js";
import { schema } from "./middlewares/userValidateSchema.js";
import { categorySchema } from "./middlewares/schemaValidate/categoryValidate.js";
import { categoryController } from "./controller/categoryController.js";

const router = Router();

// Library routes
router.get("/books", bookController.getAllBooks);
router.get("/books/:bookId", bookController.getOneBook);

// Admin routes
router.patch(
  "/admin/update/:authorId",
  validate(authorValidate),
  authorController.updateAuthor
);
router.delete("/admin/delete/:authorId", authorController.deleteAuthor);
router.post(
  "/admin/add/categories",
  validate(categorySchema),
  categoryController.createCategory
);
router.patch(
  "/admin/update/categories/:categoryId",
  validate(categorySchema),
  categoryController.updateCategory
);
router.delete(
  "/admin/delete/categories/:categoryId",
  validate(categorySchema),
  categoryController.deleteCategory
);

//User Routes
router.get("/user/:userId", userController.getOneUser);
router.patch("/user/:userId", validate(schema), userController.updateUser);
router.delete("/user/:userId", validate(schema), userController.deleteUser);

export { router };

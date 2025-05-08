import { Category } from "../models/associations.js";

const categoryController = {
  async getAllCategories(req, res, next) {
    const categories = await Category.findAll();
    // checking if result exist, if it's not, go to the middleware errorHandler
    if (!categories) {
      return next(new ApiError("Ce livre n'existe pas", 404));
    }

    res.status(200).json(categories);
  },
  async getBooksByCategories(req, res, next) {
    const categories = await Category.findAll({ include: { association: "books" } });
    // checking if result exist, if it's not, go to the middleware errorHandler
    if (!categories) {
      return next(new ApiError("Ce livre n'existe pas", 404));
    }

    res.status(200).json(categories);
  },
};

export { categoryController };

// TODO : delete this page

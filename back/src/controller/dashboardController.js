import { Author } from "../models/Author.js";
import { Category } from "../models/Category.js";
import { User } from "../models/User.js";

const dashboardController = {
  async getAllUsers(_req, res, _next) {
    const users = await User.findAll();
    res.status(200).json({ users });
  },

  async getAllCategories(_req, res, _next) {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  },

  async getAllAuthors(_req, res, _next) {
    const authors = await Author.findAll();
    res.status(200).json({ authors });
  },
};

export { dashboardController };

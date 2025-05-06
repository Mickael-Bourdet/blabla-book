import { Author } from "../models/Author";
import { Category } from "../models/Category";
import { User } from "../models/User";

const dashboardController = {
  async users(_req, res, _next) {
    const users = await User.findAll();
    res.status(200).json({ users });
  },

  async categories(_req, res, _next) {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  },

  async authors(_req, res, _next) {
    const authors = await Author.findAll();
    res.status(200).json({ authors });
  },
};

export default dashboardController;

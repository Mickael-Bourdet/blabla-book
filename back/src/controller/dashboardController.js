import { Author } from "../models/Author.js";
import { Category } from "../models/Category.js";
import { User } from "../models/User.js";


const dashboardController = {
  /**
   * 
   * @param {*} _req 
   * @param {*} res 
   * @param {*} _next 
   */
  async getAllUsers(_req, res, _next) {
    const users = await User.findAll();
    res.status(200).json({ users });
  },

  /**
   * 
   * @param {*} _req 
   * @param {*} res 
   * @param {*} _next 
   */
  async getAllCategories(_req, res, _next) {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  },

  /**
   * 
   * @param {*} _req 
   * @param {*} res 
   * @param {*} _next 
   */
  async getAllAuthors(_req, res, _next) {
    const authors = await Author.findAll();
    res.status(200).json({ authors });
  },
};

export { dashboardController };

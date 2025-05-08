import { Author } from "../models/Author.js";
import { Category } from "../models/Category.js";
import { User } from "../models/User.js";

const dashboardController = {
  /**
   * Retrieves all users from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of users.
   */
  async getAllUsers(_req, res, _next) {
    const users = await User.findAll();
    res.status(200).json({ users });
  },

  /**
   * Retrieves all categories from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of categories.
   */
  async getAllCategories(_req, res, _next) {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  },

  /**
   * Retrieves all authors from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of authors.
   */
  async getAllAuthors(_req, res, _next) {
    const authors = await Author.findAll();
    res.status(200).json({ authors });
  },
};

export { dashboardController };

import { Book } from "../models/Book.js";
import { Op } from "sequelize";

const bookController = {
  /**
   * @function getAllBooks
   * @description Fetch all books from the database.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {Array} - Object
   */
  async getAllBooks(req, res, next) {
    const { search } = req.query; // get query string

    const whereConditions = {};

    // filter by author or name
    if (search) {
      whereConditions[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } }, // Recherche insensible à la casse sur le titre du livre
        { "$authors.name$": { [Op.iLike]: `%${search}%` } }, // Recherche insensible à la casse sur le nom de l'auteur
      ];
    }
    const result = await Book.findAll({
      where: whereConditions,
      include: [{ association: "categories" }, { association: "authors" }],
    });

    if (result.length === 0) {
      const error = new Error("Il n'y a pas livres dans la base de données");
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json(result);
  },

  /**
   * @function getOneBook
   * @description Fetch a single book by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {Object}
   */
  async getOneBook(req, res, next) {
    const id = parseInt(req.params.bookId);

    const result = await Book.findByPk(id, {
      include: [{ association: "categories" }, { association: "authors" }],
    });

    // checking if result exist, if it's not, go to the middleware errorHandler
    if (!result) {
      const error = new Error("Ce livre n'existe pas");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json(result);
  },
};

export { bookController };

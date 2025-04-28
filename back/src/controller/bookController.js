import { Book } from "../models/Book.js";

const bookController = {
  /**
   * @function getAllBooks
   * @description Fetch all books from the database.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {void}
   */
  async getAllBooks(req, res, next) {
    const books = await Book.findAll({});

    if (books.length === 0) {
      const error = new Error("The server cannot find all books");
      error.statusCode = 400;
      return next(error);
    }
    res.status(200).json(books);
  },

  /**
   * @function getOneBook
   * @description Fetch a single book by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {void}
   */
  async getOneBook(req, res, next) {
    const id = parseInt(req.params.bookId);

    const result = await Book.findByPk(id);

    // checking if result exist, if it's not, go to the middleware errorHandler
    if (!result) {
      const error = new Error("This book doesn't exist");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json(result);
  },
};

export { bookController };

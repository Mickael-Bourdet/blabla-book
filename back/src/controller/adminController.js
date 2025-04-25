import { Book } from "../models/associations.js";

const adminController = {
  /**
   *  Add a new book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {Object} Book
   */

  async AddNewBook(req, res, next) {
    // Get the params
    const { isbn, title, description, published, cover_url, page_count } = req.body;

    //   check if the book is not already in the DB
    const isRegistered = await Book.findOne({ where: { isbn } });
    if (isRegistered) {
      return next({
        statusCode: 409,
        message: "Impossible d'ajouter ce livre car il existe déjà",
      });
    }

    const newBook = await Book.create({
      isbn,
      title,
      description,
      published,
      cover_url,
      page_count,
    });

    res.status(201).json(newBook);
  },

  /**
   *  update a book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {Object} Book
   */

  async updateBook(req, res, next) {
    // First check if the url ID exist, if not error 404
    const bookId = parseInt(req.params.bookId);

    const book = await Book.findByPk(bookId);

    if (!book) {
      return next({ statusCode: 404, message: "Ce livre n'existe pas" });
    }

    // Get the params
    const fields = ["isbn", "title", "description", "published", "cover_url", "page_count"];

    // if a value is declare, change it otherwise don't
    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        book[field] = req.body[field];
      }
    });

    // Save changes in the DB
    await book.save();

    // return updated book
    res.status(200).json(book);
  },

  /**
   *  delete a book in DB
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {void}- status 204
   */

  async deleteBook(req, res, next) {
    // First check if the url ID exist, if not error 404
    const bookId = parseInt(req.params.bookId);

    const book = await Book.findByPk(bookId);

    if (!book) {
      return next({ statusCode: 404, message: "Ce livre n'existe pas" });
    }

    // otherwise the book exist so we can delete it
    await book.destroy();
    res.sendStatus(204);
  },
};

export default adminController;

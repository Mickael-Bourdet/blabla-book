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

  async update(req, res, next) {},
};

export default adminController;

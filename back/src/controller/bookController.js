import { Book } from "../models/Book.js"

const bookController = {
  async getAllBooks(req, res) {
    res.status(200).json(await Book.findAll({}));
  },

  async getOneBook(req, res, next) {
    const id = req.params.bookId;
  
    const result = await Book.findByPk(id);

    // checking if result exist, if it's not, go to the middleware errorHandler
    // if (!result) {
    //   return next();
    // }

    res.status(200).json(result);
  }
};

export { bookController };
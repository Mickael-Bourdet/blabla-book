import { Book } from "../models/Book.js"

const bookController = {
  // method to get all books
  async getAllBooks(req, res, next) {
    const books = await Book.findAll({});
    
    if(!books) {
      const error = new Error("The server cannot find all books");
      error.statusCode = 400;
      return next();
    }
    res.status(200).json(books);
  },

  // method to get one book
  async getOneBook(req, res, next) {
    const id = parseInt(req.params.bookId);
  
    const result = await Book.findByPk(id);

    // checking if result exist, if it's not, go to the middleware errorHandler
    if (!result) {
      const error = new Error("This book doesn't exist");
      error.statusCode = 404;
      return next();
    }

    res.status(200).json(result);
  },
};

export { bookController };

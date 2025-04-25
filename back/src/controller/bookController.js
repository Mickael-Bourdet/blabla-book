import { Book } from "../models/Book.js"

const bookController = {
  async getAllBooks(req, res) {
    res.status(200).json(await Book.findAll({}));
  },
};

export { bookController };
import { User, Book, Author } from "../models/associations.js";

// TODO : more explicit name and message ?
const userLibraryController = {
  // get the user library
  async getLibrary(req, res, next) {
    const id = parseInt(req.params.userId);

    const result = await User.findByPk(id, {
      include: ["books_is_read", "books_maybe_read"],
    });

    res.status(200).json(result);
  },

  // add one book to Read list
  async addRead(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        const error = new Error("User not found");
        error.status = 409;
        return next(error);
      }

      // get the book
      const book = await Book.findByPk(bookId);
      if (!book) {
        const error = new Error("Book not found");
        error.status = 409;
        return next(error);
      }

      //add the book
      await user.addBooks_is_read(book);

      res.status(200).json({ message: " Book added" });
    } catch (error) {
      next(error);
    }
  },

  //delete one book to Read list
  // TODO : fix bug, don't delete the right book
  async deleteRead(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the book
    const book = await Book.findByPk(id);

    if (!book) {
      const error = new Error("Book not found");
      error.status = 409;
      return next(error);
    } else {
      await book.destroy();

      res.status(200).json({ message: "Book deleted" });
    }
  },

  // add one book to  toRead list
  async addToRead(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        const error = new Error("User not found");
        error.status = 409;
        return next(error);
      }

      // get the book
      const book = await Book.findByPk(bookId);
      if (!book) {
        const error = new Error("Book not found");
        error.status = 409;
        return next(error);
      }

      //add the book
      await user.addBooks_maybe_read(book);

      res.status(200).json({ message: " Book added" });
    } catch (error) {
      next(error);
    }
  },

  //delete one book to toRead list
  // TODO : fix bug, don't delete the right book

  async deleteToRead(req, res, next) {
    const id = parseInt(req.params.bookId);

    //get the book
    const book = await Book.findByPk(id);

    if (!book) {
      const error = new Error("Book not found");
      error.status = 409;
      return next(error);
    } else {
      // if book exist delete
      await book.destroy();

      res.status(200).json({ message: "Book deleted" });
    }
  },
};
export { userLibraryController };

import { User, Book } from "../models/associations.js";

const userLibraryController = {
  // Get the full library of a user (read and to-read lists)
  async getLibrary(req, res, next) {
    const id = parseInt(req.params.userId);

    const result = await User.findByPk(id, {
      include: ["books_already_read", "books_wish_read"],
    });

    if (!result) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 404;
      return next(error);
    }

    res.status(200).json(result);
  },

  // Add a book to the user's "already read" list
  async addToMyReadLibrary(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    const user = await User.findByPk(userId);
    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    }

    const book = await Book.findByPk(bookId);
    if (!book) {
      const error = new Error("Livre non trouvé");
      error.status = 409;
      return next(error);
    }

    await user.addBooks_is_read(book);

    res.status(200).json({ message: "Livre ajouté à la liste des livres lus" });
  },

  // Remove a book from the user's "already read" list
  async deleteToMyReadLibrary(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId);

    if (!user || !book) {
      const error = new Error("Utilisateur ou livre non trouvé");
      error.status = 409;
      return next(error);
    }

    await user.removeBooks_is_read(book);

    res.status(200).json({ message: "Livre retiré de la liste des livres lus" });
  },

  // Add a book to the user's "to read" list
  async addToWishRead(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    const user = await User.findByPk(userId);
    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.status = 409;
      return next(error);
    }

    const book = await Book.findByPk(bookId);
    if (!book) {
      const error = new Error("Livre non trouvé");
      error.status = 409;
      return next(error);
    }

    await user.addBooks_maybe_read(book);

    res.status(200).json({ message: "Livre ajouté à la liste des livres à lire" });
  },

  // Remove a book from the user's "to read" list
  async deleteToWishRead(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    const user = await User.findByPk(userId);
    const book = await Book.findByPk(bookId);

    if (!user || !book) {
      const error = new Error("Utilisateur ou livre non trouvé");
      error.status = 409;
      return next(error);
    }

    await user.removeBooks_maybe_read(book);

    res.status(200).json({ message: "Livre retiré de la liste des livres à lire" });
  },
};

export { userLibraryController };

import { User, Book, Author } from "../models/associations.js";

// TODO : more explicit name and message ?
const userLibraryController = {
  // get the user library
  async getLibrary(req, res, next) {
    const id = parseInt(req.params.userId);

    const result = await User.findByPk(id, {
   include: ["books_already_read", "books_wish_read"],
    });

    res.status(200).json(result);
  },

  // add one book to Read list
  async addToMyReadLibrary(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

   
      const user = await User.findByPk(userId);
      if (!user) {
        const error = new Error("Utilisateur non trouvé");
        error.status = 409;
        return next(error);
      }

      // get the book
      const book = await Book.findByPk(bookId);
      if (!book) {
        const error = new Error("Livre non trouvé");
        error.status = 409;
        return next(error);
      }

      //add the book
      await user.addBooks_is_read(book);

      res.status(200).json({ message: "Livre ajouté a la liste des livres lus" });
   
  },

  //delete one book to Read list
  // TODO : fix bug, don't delete the right book
  async deleteToMyReadLibrary(req, res, next) {
    const id = parseInt(req.params.userId);

    //get the book
    const book = await Book.findByPk(id);

    if (!book) {
      const error = new Error("Livre non trouvé");
      error.status = 409;
      return next(error);
    } else {
      await book.destroy();

      res.status(200).json({ message: "Livre supprimé de la liste des livres lus" });
    }
  },

  // add one book to  toRead list
  async addToWishRead(req, res, next) {
    const userId = parseInt(req.params.userId);
    const bookId = parseInt(req.params.bookId);

    
      const user = await User.findByPk(userId);
      if (!user) {
        const error = new Error("Utilisateur non trouvé");
        error.status = 409;
        return next(error);
      }

      // get the book
      const book = await Book.findByPk(bookId);
      if (!book) {
        const error = new Error("Livre non trouvé");
        error.status = 409;
        return next(error);
      }

      //add the book
      await user.addBooks_maybe_read(book);

      res.status(200).json({ message: "Livre ajouté a la liste des livres à lire" });
  
  },

  //delete one book to toRead list

  async deleteToWishRead(req, res, next) {
    const id = parseInt(req.params.bookId);

    //get the book
    const book = await Book.findByPk(id);

    if (!book) {
      const error = new Error("Livre non trouvé");
      error.status = 409;
      return next(error);
    } else {
      // if book exist delete
      await book.destroy();

      res.status(200).json({ message: "Livre supprimé de la liste des livres à lire" });
    }
  },
};
export { userLibraryController };

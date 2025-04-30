import { User, Book } from "../models/associations.js";

const userLibraryController = {
  /**
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @param {NextFunction} next - Express next middleware function.
   * @throws {Error} Utilisateur non trouvé (404)
   */
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


   /**
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @param {NextFunction} next - Express next middleware function.
   * @throws {Error} Utilisateur non trouvé (409)
   * @throws {Error} Livre non trouvé (409)
   */
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

    await user.addBooks_already_read(book);

    res.status(200).json({ message: "Livre ajouté à la liste des livres lus" });
  },


    /**
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @param {NextFunction} next - Express next middleware function.
   * @throws {Error} Utilisateur ou livre non trouvé (409)
   */
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
    
        await user.removeBooks_already_read(book);
    
        res.status(200).json({ message: "Livre retiré de la liste des livres lus" });
      },
    
   /**
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @param {NextFunction} next - Express next middleware function.
   * @throws {Error} Utilisateur non trouvé (409)
   * @throws {Error} Livre non trouvé (409)
   */
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

    await user.addBooks_wish_read(book);

    res.status(200).json({ message: "Livre ajouté à la liste des livres à lire" });
  },

   /**
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @param {NextFunction} next - Express next middleware function.
   * @throws {Error} Utilisateur ou livre non trouvé (409)
   */
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

    await user.removeBooks_wish_read(book);

    res.status(200).json({ message: "Livre retiré de la liste des livres à lire" });
  },

};

export { userLibraryController };

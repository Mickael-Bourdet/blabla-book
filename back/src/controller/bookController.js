import { Book, Author } from "../models/associations.js";
import { Op } from "sequelize";
import { ApiError } from "../middlewares/ApiError.js";

const bookController = {
  /**
   * @function getAllBooks
   * @description Fetch all books from the database.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {Array} - Object
   */
  async getAllBooks(req, res, next) {
    const { query } = req.query;

    // Vérifie si le paramètre de recherche est passé
    if (!query) {
      return res.status(400).json({ message: "Query parameter is required" });
    }

    try {
      console.log(`Recherche backend pour: "${query}"`);

      // Première requête : recherche par titre de livre
      const booksByTitle = await Book.findAll({
        where: {
          title: { [Op.iLike]: `%${query}%` },
        },
        include: [
          {
            model: Author,
            as: "author",
          },
        ],
      });

      // Deuxième requête : recherche des livres par nom d'auteur
      const booksByAuthor = await Book.findAll({
        include: [
          {
            model: Author,
            as: "author",
            where: {
              name: { [Op.iLike]: `%${query}%` },
            },
          },
        ],
      });

      // Fusion des résultats sans doublons
      const allBookIds = new Set();
      const books = [];

      // Ajoute les livres trouvés par titre
      booksByTitle.forEach((book) => {
        if (!allBookIds.has(book.id)) {
          allBookIds.add(book.id);
          books.push(book);
        }
      });

      // Ajoute les livres trouvés par auteur (sans dupliquer)
      booksByAuthor.forEach((book) => {
        if (!allBookIds.has(book.id)) {
          allBookIds.add(book.id);
          books.push(book);
        }
      });

      // Recherche directe des auteurs par nom
      const authors = await Author.findAll({
        where: {
          name: { [Op.iLike]: `%${query}%` },
        },
        limit: 10,
      });

      console.log(
        `Résultats trouvés - Livres par titre: ${booksByTitle.length}, Livres par auteur: ${booksByAuthor.length}, Total livres: ${books.length}, Auteurs: ${authors.length}`
      );

      // Réponse avec les deux collections
      return res.status(200).json({
        books,
        authors,
        message: books.length === 0 && authors.length === 0 ? "No results found" : undefined,
      });
    } catch (error) {
      console.error("Error while searching books and authors:", error);
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  },

  /**
   * @function getOneBook
   * @description Fetch a single book by ID.
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   * @returns {Object}
   */
  async getOneBook(req, res, next) {
    const id = parseInt(req.params.bookId);

    const result = await Book.findByPk(id, {
      include: [
        { association: "categories" },
        { association: "authors" },
        { association: "users_has_read" },
        { association: "users_need_to_read" },
      ],
    });

    // checking if result exist, if it's not, go to the middleware errorHandler
    if (!result) {
      return next(new ApiError("Ce livre n'existe pas", 404));
    }

    res.status(200).json(result);
  },
};

export { bookController };

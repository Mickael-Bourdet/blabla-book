import { Author, Category, User } from "../models/associations.js";

const dashboardController = {
  /**
   * Retrieves all users from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of users.
   */
  async getAllUsers(_req, res, _next) {
    const users = await User.findAll();
    res.status(200).json({ users });
  },

  /**
   * Retrieves all categories from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of categories.
   */
  async getAllCategories(_req, res, _next) {
    const categories = await Category.findAll();
    res.status(200).json({ categories });
  },

  /**
   * Retrieves all authors from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of authors.
   */
  async getAllAuthors(_req, res, _next) {
    const authors = await Author.findAll();
    res.status(200).json({ authors });
  },

  /**
   * Controller method to retrieve all reviews from the database.
   *
   * @param {Object} _req - The request object (unused).
   * @param {Object} res - The response object.
   * @param {Function} _next - The next middleware function (unused).
   * @returns {Object} - The response object with the list of reviews.
   */
  async getAllReview(_req, res, _next) {
    const reviews = await Review.findAll();
    res.status(200).json({ reviews });
  },

  /**
   * Controller method to retrieve reviews made by a specific user.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @param {Function} next - The next middleware function.
   * @returns {Object} - The response object with the user's reviews data.
   */
  async getReviewsByUser(req, res, next) {
    const userId = parseInt(req.params.userId);
    if (!userId) {
      return next(new ApiError("Non autorisé !", 401));
    }

    const reviews = await Review.findAll({
      where: { user_id: userId },
      include: [
        { association: "books" },
        { association: "users", attributes: ["id", "name"] },
      ],
    });

    if (!reviews) {
      return next(new ApiError("Aucun avis trouvés pour cet utilisateur", 404));
    }

    const rating = reviews.find((r) => r.rating !== null);
    const comments = reviews.filter((r) => r.comment || r.title);

    res.status(200).json({
      user: reviews[0].users,
      rating: rating
        ? {
            id: rating.id,
            rating: rating.rating,
            book: rating.books,
            createdAt: rating.createdAt,
            updatedAt: rating.updatedAt,
          }
        : null,
      comments: comments.map((comment) => ({
        id: comment.id,
        title: comment.title,
        comment: comment.comment,
        book: comment.books,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
      })),
    });
  },
};

export { dashboardController };

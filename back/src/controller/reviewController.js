import { Op } from "sequelize";
import { Review } from "../models/associations.js";
import { ApiError } from "../middlewares/ApiError.js";

const reviewController = {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @param {*} _next
   */
  async createReview(req, res, next) {
    const userId = req.user?.userId;
    const bookId = parseInt(req.params.bookId);
    const { rating, title, comment } = req.body;

    if (!rating && !title && !comment) {
      return next(
        new ApiError("Vous devez au moins noter ou laisser un commentaire", 400)
      );
    }

    // Mon tableau d'avis (title et comment)
    const reviews = {
      updatedRating: null,
      newComments: [],
    };

    // Cas où l'utilisateur veux ajouter une note (avec ou sans avis)
    if (rating !== undefined) {
      const existingRating = await Review.findOne({
        where: {
          book_id: bookId,
          user_id: userId,
          rating: { [Op.not]: null },
        },
      });
      if (existingRating) {
        existingRating.rating = rating;
        await existingRating.save();
        reviews.updatedRating = {
          id: existingRating.id,
          rating: existingRating.rating,
          user_id: existingRating.user_id,
          book_id: existingRating.book_id,
          createdAt: existingRating.createdAt,
          updatedAt: existingRating.updatedAt,
        };
      } else {
        await Review.create({
          rating,
          book_id: bookId,
          user_id: userId,
        });
        reviews.updatedRating = {
          id: existingRating.id,
          rating: existingRating.rating,
          user_id: existingRating.user_id,
          book_id: existingRating.book_id,
          createdAt: existingRating.createdAt,
          updatedAt: existingRating.updatedAt,
        };
      }
    }

    if (title || comment) {
      const newReview = await Review.create({
        title,
        comment,
        book_id: bookId,
        user_id: userId,
      });
      reviews.newComments.push({
        id: newReview.id,
        title: newReview.title,
        comment: newReview.comment,
        user_id: newReview.user_id,
        book_id: newReview.book_id,
        createdAt: newReview.createdAt,
        updatedAt: newReview.updatedAt,
      });
    }

    res
      .status(201)
      .json({ message: "Avis ou note ajoutée avec succès", review: reviews });
  },
};

export { reviewController };

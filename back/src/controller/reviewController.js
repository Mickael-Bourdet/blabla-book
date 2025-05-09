import { Review } from "../models/associations.js"

const reviewController = {
  /**
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} _next 
   */
  async createReview(req, res, _next) {
    const userId = req.user?.userId;
    const bookId = parseInt(req.params.bookId);
    const { rating, title, comment } = req.body;

    const review = await Review.create({
      rating,
      title,
      comment,
      book_id: bookId,
      user_id: userId,
    });

    res.status(201).json({ message: "Avis ou note ajoutée avec succès", review })
  },
}

export { reviewController };
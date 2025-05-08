import { User } from "../models/User.js";
import { ApiError } from "../middlewares/ApiError.js";

/**
 * Middleware to check if the user is an admin.
 *
 * @param {Object} req - The request object.
 * @param {Object} _res - The response object (unused).
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
export const isAdminMiddleware = async (req, _res, next) => {
  try {
    // Extract the user ID from the request object
    const userId = req.user?.userId;

    // Check if the user ID is missing
    if (!userId) {
      return next(new ApiError("Non authentifié", 401));
    }

    // Find the user by their ID
    const user = await User.findByPk(userId);

    // Check if the user does not exist or is not an admin
    if (!user || user.role !== "admin") {
      return next(new ApiError("Accès refusé : admin requis", 403));
    }

    next();
  } catch (error) {
    next(error);
  }
};

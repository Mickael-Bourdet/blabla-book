import { User } from "../models/User.js";
import { ApiError } from "../middlewares/ApiError.js";

export const isAdminMiddleware = async (req, _res, next) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return next(new ApiError("Non authentifié", 401));
    }

    const user = await User.findByPk(userId);

    if (!user || user.role !== "admin") {
      return next(new ApiError("Accès refusé : admin requis", 403));
    }

    next(); // accès autorisé
  } catch (error) {
    next(error);
  }
};

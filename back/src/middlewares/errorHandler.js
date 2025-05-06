import { ApiError } from "./ApiError.js";

/**
 * 
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const errorHandler = (error, req, res, next) => {
  // Cas 1 : Erreur personnalisée de l'app (ApiError)
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
      errors: error.details ?? undefined,
    });
  }

  // Cas 2 : Erreur de validation (ex: Joi)
  if (error.details && Array.isArray(error.details)) {
    return res.status(400).json({
      status: 400,
      message: "Erreur de validation",
      errors: error.details,
    });
  }

  // Cas 3 : Erreur inattendue
  const status = error.statusCode || 500;
  const message = error.message || "Une erreur est survenue";

  const response = {
    status,
    message,
  };

  if (process.env.NODE_ENV !== "production") {
    response.stack = error.stack;
  }

  return res.status(status).json(response);
};
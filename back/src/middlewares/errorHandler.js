import { ApiError } from "./schemaValidate/ApiError";

/**
 * Middleware function to handle errors.
 *
 * @param {Error} error - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The response object with the error status and message.
 */
export const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || "Une erreur est survenue";

  // Si nous avons des détails d'erreur dans un tableau
  if (error.details && Array.isArray(error.details)) {
    return res.status(status).json({
      status,
      message: "Erreur de validation",
      errors: error.details
    });
  }

  // Structure de base de la réponse d'erreur
  const response = {
    status,
    message,
  }

  // Environnement de développement → afficher la stack
  if (process.env.NODE_ENV !== "production") {
    response.stack = error.stack;
  }

  // Send the response with the determined status code and error message
  return res.status(status).json(response);
};
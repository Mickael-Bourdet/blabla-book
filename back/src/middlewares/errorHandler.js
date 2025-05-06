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
  // Determine the HTTP status code from the error object, defaulting to 500 if not specified
  const status = error.statusCode || 500;
  
  // Si nous avons des détails d'erreur dans un tableau
  if (error.details && Array.isArray(error.details)) {
    return res.status(status).json({
      status,
      message: "Erreur de validation",
      errors: error.details
    });
  }
  
  // Gestion des erreurs sans tableau de détails
  const message = error.message || "Une erreur est survenue";
  
  // Send the response with the determined status code and error message
  return res.status(status).json({ status, message });
};
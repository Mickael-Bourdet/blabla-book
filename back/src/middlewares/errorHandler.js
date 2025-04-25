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

  // Set the error message, defaulting to a generic message if not specified
  let message = error.message || "Une erreur est survenue";

  // If the error object contains details, append them to the message
  if (error.details) {
    message = `${message} ${error.details.join(" ")}`;
  }

  // Send the response with the determined status code and error message
  return res.status(status).json({ status, message });
};


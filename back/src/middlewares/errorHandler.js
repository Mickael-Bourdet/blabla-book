export const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  let message = error.message || "Une erreur est survenue";

  if (error.details) {
    message = `${message} ${error.details.join(" ")}`;
  }

  return res.status(status).json({ status, message });
};

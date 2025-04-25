import Joi from "joi";

// Define the schema for validating a category
const categorySchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).regex(/[^\s]/).messages({
    "string.base": "Le nom doit être une chaîne de caractères",
    "string.empty": "Le nom ne peut pas être vide",
    "string.min": "Le nom doit contenir au moins {#limit} caractères",
    "string.max": "Le nom doit contenir au plus {#limit} caractères",
    "string.pattern.base": "Le nom ne peut pas contenir uniquement des espaces",
  }),
});

// funcition to validate the category based on the request (req)
export function validateCategory(req) {
  let schema = categorySchema;

  if (req.method === "POST") {
    // if a post req, name fiels is require
    schema = schema.fork(["name"], (field) =>
      field.required().messages({
        "any.required": "Le champ {#label} est obligatoire",
      })
    );
  }

  // validate the req body  againt the schema
  const error = schema.validate(req.body, { abortEarly: false }).error;

  // formatted res, if there are errors
  return error
    ? {
        statusCode: 400,
        message: error.details.map((detail) => detail.message),
      }
    : null;
}

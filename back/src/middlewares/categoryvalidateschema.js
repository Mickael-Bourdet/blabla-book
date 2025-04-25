import Joi from "joi";

const categorySchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).regex(/[^\s]/).messages({
    "string.base": "Le nom doit être une chaîne de caractères",
    "string.empty": "Le nom ne peut pas être vide",
    "string.min": "Le nom doit contenir au moins {#limit} caractères",
    "string.max": "Le nom doit contenir au plus {#limit} caractères",
    "string.pattern.base": "Le nom ne peut pas contenir uniquement des espaces",
  }),
});

export function validateCategory(req) {
  let schema = categorySchema;

  if (req.method === "POST") {
    schema = schema.fork(["name"], (field) =>
      field.required().messages({
        "any.required": "Le champ {#label} est obligatoire",
      })
    );
  }

  const error = schema.validate(req.body, { abortEarly: false }).error;

  return error
    ? {
        statusCode: 400,
        message: error.details.map((detail) => detail.message),
      }
    : null;
}

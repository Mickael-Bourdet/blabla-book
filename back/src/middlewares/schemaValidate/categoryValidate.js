import Joi from "joi";

// Define the schema for validating a category
const categorySchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).messages({
    "string.base": "Le nom doit être une chaîne de caractères",
    "string.empty": "Le nom ne peut pas être vide",
    "string.min": "Le nom doit contenir au moins {#limit} caractères",
    "string.max": "Le nom doit contenir au plus {#limit} caractères",
    "string.pattern.base": "Le nom ne peut pas contenir uniquement des espaces",
  }),
});

export { categorySchema };

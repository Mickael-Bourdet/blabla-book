import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

// Extend Joi with the joi-password plugin to add password validation rules
const joiPassword = Joi.extend(joiPasswordExtendCore);

const UpdateUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.base": "Le nom doit être une chaîne de caractères",
    "string.min": "Le le nom doit contenir au moins 3 caractères",
    "string.max": "Le nom doit contenir au plus 50 caractères",
  }),
  password: joiPassword
    .string()
    .min(12)
    .max(100)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .minOfSpecialCharacters(1)
    .noWhiteSpaces()
    .required()
    .messages({
      "string.min": "Le mot de passe doit contenir au moins 8 caractères.",
      "string.max": "Le mot de passe ne doit pas dépasser 20 caractères.",
      "string.pattern.base": "Le mot de passe doit contenir uniquement des lettres et des chiffres.",
    }),
  email: Joi.string().email().min(3).max(100).messages({
    "string.base": "L'Email' doit être une chaîne de caractères",
    "string.min": "L'Email' doit contenir au moins 3 caractères",
    "string.max": "L'Email' doit contenir au plus 100 caractères",
    'string.email': 'L’email n’est pas valide.',
  }),
});

export { UpdateUserSchema };

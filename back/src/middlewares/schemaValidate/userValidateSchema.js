import Joi from "joi";
const UpdateUserSchema = Joi.object({



  name: Joi.string().min(3).max(50).messages({
    "string.base": "Le nom doit être une chaîne de caractères",
    "string.min": "Le le nom doit contenir au moins 3 caractères",
    "string.max": "Le nom doit contenir au plus 100 caractères",
  }),

  password: Joi.string()
    .min(8)
    .max(100)
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .messages({
      "string.min": "Le mot de passe doit contenir au moins 8 caractères.",
      "string.max": "Le mot de passe ne doit pas dépasser 20 caractères.",
      "string.pattern.base": "Le mot de passe doit contenir uniquement des lettres et des chiffres.",
    }),
  // a voir si il faudra confirmer son password

  // confirPassword: Joi.string().valid(Joi.ref('password')).messages({
  //     'any.only': 'Les passwords ne correspondent pas.',
  //     'string.empty': 'La confirmation est obligatoire.',
  //   }),

  email: Joi.string().email().min(3).max(100).messages({
    "string.base": "L'Email' doit être une chaîne de caractères",
    "string.min": "L'Email' doit contenir au moins 3 caractères",
    "string.max": "L'Email' doit contenir au plus 100 caractères",
    'string.email': 'L’email n’est pas valide.',
}),
// a voir si il faudra confirmer son email

// confirEmail: Joi.string().valid(Joi.ref('email')).messages({
//     'any.only': 'Les emails ne correspondent pas.',
//     'string.empty': 'La confirmation est obligatoire.',
//   }),
});
export { UpdateUserSchema };

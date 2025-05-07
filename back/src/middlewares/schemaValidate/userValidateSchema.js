import Joi from "joi";
import { registerSchema } from "./authValidateSchema.js";

const updateUserSchema = registerSchema
  .fork(["name", "email", "password", "confirmPassword"], (schema) =>
    schema.optional()
  )
  .keys({
    // Redefine confirmPassword to make it conditional
    confirmPassword: Joi.string().when("password", {
      is: Joi.exist(),
      then: Joi.valid(Joi.ref("password")).required().messages({
        "any.only": "Les mots de passe ne correspondent pas",
        "any.required": "La confirmation du mot de passe est requise",
      }),
      otherwise: Joi.forbidden(),
    }),
    // Add currentPassword with conditional validation
    currentPassword: Joi.string().when("password", {
      is: Joi.exist(),
      then: Joi.required().messages({
        "any.required":
          "Le mot de passe actuel est requis pour modifier le mot de passe",
      }),
      otherwise: Joi.forbidden(),
    }),
  });

export { updateUserSchema };

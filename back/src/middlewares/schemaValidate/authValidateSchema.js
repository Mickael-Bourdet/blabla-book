import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";

// Extend Joi with the joi-password plugin to add password validation rules
const joiPassword = Joi.extend(joiPasswordExtendCore);

/**
 * Joi schema for validating user registration data.
 */
const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().required(),
  password: joiPassword
    .string()
    .min(12)
    .max(100)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .minOfSpecialCharacters(1)
    .noWhiteSpaces()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export { registerSchema };
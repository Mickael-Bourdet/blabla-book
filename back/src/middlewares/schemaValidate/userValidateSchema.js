import { registerSchema } from "./authValidateSchema.js";
import Joi from "joi";
const UpdateUserSchema = registerSchema.fork(
  ["name", "email", "password", "confirmPassword"],

  
  (schema) => schema.optional()).append({
    currentPassword: Joi.string().required().when("password", {
      is: Joi.exist(),
      then: Joi.string().required(),
      otherwise: Joi.forbidden(), 
    }),
  });
export { UpdateUserSchema };

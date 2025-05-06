import { registerSchema } from "./authValidateSchema.js";

const UpdateUserSchema = registerSchema.fork(
  ["name", "email", "password", "confirmPassword"],
  (schema) => schema.optional()
)
export { UpdateUserSchema };

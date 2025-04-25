import Joi from "joi";

const authorValidate =  Joi.object({    
  name: Joi.string().required(),
});

export { authorValidate };
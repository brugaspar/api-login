import Joi from "@hapi/joi";

export default Joi.object({
  name: Joi.string().min(3).required(),
  birthday: Joi.date().iso(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  timestamps: Joi.any().forbidden()
});
import Joi from "@hapi/joi";

export default Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
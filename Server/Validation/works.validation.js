const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const workValidation = Joi.object({
  ownerId : Joi.objectId,
  title: Joi.string().min(3).required(),
  description: Joi.string().min(15).required(),
  price: Joi.number(),
  tel: Joi.string(),
  email:Joi.string(),
});
module.exports = workValidation;

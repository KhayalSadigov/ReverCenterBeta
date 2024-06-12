const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const workValidation = Joi.object({
  ownerId : Joi.objectId,
  title: Joi.string().required(),
  description: Joi.string().min(15).required(),
  price: Joi.number(),
  tel: Joi.string(),
  email:Joi.string(),
  src: Joi.string(),
  status: Joi.boolean().required()

});
module.exports = workValidation;

const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const userValidation = Joi.object({
  username: Joi.string().min(3).required(),
  biography: Joi.string(),
  password: Joi.string(),
  src : Joi.string() , 
  role: Joi.string(),
  wishlist: Joi.array(),
  mail: Joi.string().required(),
  rank : Joi.number()
});
module.exports = userValidation;


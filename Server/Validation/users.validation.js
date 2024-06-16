const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const userValidation = Joi.object({
  username: Joi.string().min(3).required(),
  biography: Joi.string().min(1).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  src : Joi.string().default("") , 
  role: Joi.string().required(),
  wishlist: Joi.array().required(),
  mail: Joi.string().required(),
  rank : Joi.number().default(0)
});
module.exports = userValidation;


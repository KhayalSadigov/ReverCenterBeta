const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const serviceValidation = Joi.object({
    title: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    price : Joi.number().required(),
    discount: Joi.number().min(0).max(100).required(),
    src: Joi.string().required()
})
module.exports = serviceValidation
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const courseValidation = Joi.object({
    title : Joi.string().min(1).required(),
    description: Joi.string().required(),
    src: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().min(0).max(100).required(),
    time: Joi.number().min(1).max(6).required(),
    date: Joi.date(),
    status: Joi.boolean()
})
module.exports = courseValidation
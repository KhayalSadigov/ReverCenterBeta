const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const messageValidation = Joi.object({
    title : Joi.string().min(1).required(),
    content: Joi.string().min(15).required(),
    ownerId : Joi.objectId().required(),
    status : Joi.boolean().required()
})
module.exports = messageValidation
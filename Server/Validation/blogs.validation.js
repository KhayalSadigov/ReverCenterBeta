const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const blogValidation = Joi.object({
    ownerId: Joi.objectId(),
    title : Joi.string().min(1).required(),
    description: Joi.string().min(200).required(),
    cover: Joi.string().required(),
    status: Joi.boolean().required()
})
module.exports = blogValidation
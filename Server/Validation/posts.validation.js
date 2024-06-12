const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const postValidation = Joi.object({
    content: Joi.string().min(15).required(),
    ownerId : Joi.objectId().required(),
    likes : Joi.array(),
    comment: Joi.array()
})
module.exports = postValidation
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const postValidation = Joi.object({
    content: Joi.string().min(1).max(350).required(),
    ownerId : Joi.objectId().required(),
    likes : Joi.array(),
    comment: Joi.array(),
    date : Joi.string().required(),
})
module.exports = postValidation
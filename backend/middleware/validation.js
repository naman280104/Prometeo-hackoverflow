const Joi = require('@hapi/joi');

const validateRegistration = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required().email()
})

const validateLogin = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})
module.exports = {
    validateRegistration,
    validateLogin

}
const joi = require('joi')
const user = require('../models/User')


const schema = {
    name: joi.string().required(),
    username: joi.string().required().min(6),
    password: joi.string().required().min(6),
    email: joi.string().required().email()
}
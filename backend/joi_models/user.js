const Joi = require('@hapi/joi');

exports.register = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required()

})

exports.login = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required()
})
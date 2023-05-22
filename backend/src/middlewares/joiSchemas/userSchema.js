const Joi = require('joi');

const createUser = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  name: Joi.string().min(5).required(),
  cpf: Joi.string().required().length(11),
  phone: Joi.string().required().length(11),
  birthdate: Joi.date().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  createUser,
};

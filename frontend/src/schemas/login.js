// Packages
import Joi from 'joi';

export const schema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'Por favor, informe um e-mail',
    'string.email': 'O e-mail deve ser um e-mail válido',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Por favor, informe uma senha',
    'string.min': 'A senha deve ter no mínimo 6 caracteres',
  }),
});
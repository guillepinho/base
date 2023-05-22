// Packages
import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'Por favor, informe seu e-mail',
    'string.email': 'O e-mail deve ser válido',
  }),
  name: Joi.string().min(5).required().messages({
    'string.empty': 'Por favor, informe seu nome',
    'string.min': 'Por favor digite seu nome completo',
  }),
  cpf: Joi.string().required().length(14).messages({
    'string.empty': 'Por favor, informe seu CPF',
    'string.length': 'Seu CPF deve ser composto de 11 números',
  }),
  phone: Joi.string().required().length(15).messages({
    'string.empty': 'Por favor, informe seu telefone',
    'string.length': 'Seu telefone deve ser composto de 11 números',
  }),
  birthdate: Joi.date().required().messages({
    'date.empty': 'Por favor, informe sua data de nascimento',
    'date.base': 'A data fornecida não é válida',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Por favor, informe uma senha',
    'string.min': 'A senha deve ter no mínimo 6 caracteres',
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': 'Confirme a senha',
      'any.only': 'As senhas não conferem, verifique a digitação',
    }),
});

export default schema;

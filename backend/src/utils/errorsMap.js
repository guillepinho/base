const responses = {
  REQUIRED_FIELD: 400,
  UNAUTHORIZED: 401,
  ACCESS_DENIED: 403,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUES: 422,
};

const messages = {
  REQUIRED_FIELD: 'Campos obrigatórios não preenchidos.',
  UNAUTHORIZED: 'Usuário ou senha inválidos.',
  ACCESS_DENIED: 'Acesso negado.',
  FORBIDDEN: 'Token não encontrado.',
  NOT_FOUND: 'Não encontrado.',
  CONFLICT: 'Conflito, dados já existem.',
  INVALID_VALUES: 'Valores não processáveis.',
};

/**
 * Based on a type passed, returns a response and message.
 * @param { string }      type  string, containing the error
 * @returns { object }    returns a mapped error object, with response and message
 */
const errorsMap = (type) => ({
  response: responses[type] || 500,
  message: messages[type] || 'Internal server error',
});

module.exports = errorsMap;

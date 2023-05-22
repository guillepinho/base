/* eslint-disable no-unused-vars */
const errorsMap = require('../utils/errorsMap');

const errorMiddleware = (err, _req, res, _next) => {
  console.error(err);
  const { cause } = err;
  const { response, message } = errorsMap(cause);
  return res.status(response).json({ message });
};

module.exports = errorMiddleware;

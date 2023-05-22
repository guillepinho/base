const throwError = require('../utils/throwError');
const responseList = require('../utils/responseList');

module.exports = (schema) => (req, _res, next) => {
  const payload = req.body;
  const { error } = schema.validate(payload);
  console.log('joi', error || 'validated');
  if (error) throwError(responseList.INVALID_VALUES);

  next();
};
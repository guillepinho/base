const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('../utils/bcryptUtil');
const { user, sequelize } = require('../models');
const throwError = require('../utils/throwError');
const responseList = require('../utils/responseList');

/**
 * Creates a user in our database.
 * @param {Object} payload The user Payload
 * @returns The user information
 */
const create = async (payload) => {
  const cryptedPassword = await bcrypt.encryptPassword(payload.password);

  const dataToInsert = {
    ...payload,
    id: uuidv4(),
    password: cryptedPassword,
  };

  const result = await sequelize.transaction(async (t) => {
    const newUser = await user.create(dataToInsert, { transaction: t });
    return newUser;
  });
  return result;
};

const login = async ({ email, password }) => {
  const userFound = await user.findOne({ where: { email } });

  if (!userFound) throwError(responseList.UNAUTHORIZED);
  const verifyPassword = await bcrypt.verifyPassword(password, userFound.password);
  if (!verifyPassword) throwError(responseList.UNAUTHORIZED);

  const { id, name, cpf } = userFound;
  const token = jwt.sign({
    id, name, cpf, email,
  }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  return token;
};

module.exports = {
  create,
  login,
};

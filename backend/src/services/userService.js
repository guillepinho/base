const { v4: uuidv4 } = require('uuid');
const bcrypt = require('../utils/bcryptUtil');
const { user, sequelize } = require('../models');

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

  try {
    const result = await sequelize.transaction(async (t) => {
      const newUser = await user.create(dataToInsert, { transaction: t });
      return newUser;
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  create,
};

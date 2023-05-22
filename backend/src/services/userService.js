const bcrypt = require('../utils/bcryptUtil');
const { userModel, sequelize } = require('../models');

/**
 * Creates a user in our database.
 * @param {Object} payload The user Payload
 * @returns The user information
 */
const create = async (payload) => {
  const cryptedPassword = bcrypt.encryptPassword(payload.password);

  const dataToInsert = {
    ...payload,
    password: cryptedPassword,
  };

  try {
    const result = await sequelize.transaction(async (t) => {
      const newUser = await userModel.create(dataToInsert, { transaction: t });
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

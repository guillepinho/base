const bcrypt = require('bcrypt');

/**
 * Encrypts the password with bcrypt using 11 salts.
 * @param {String} password The password provided
 * @returns The encrypted password
 */
const encryptPassword = async (password) => {
  const pass = await bcrypt.hash(password, 11);
  return pass;
};

/**
 * Compares the provided string password with the hash.
 * @param   {String}  password  Provided password
 * @param   {String}  hash      Hash on the server to compare
 * @returns {Boolean}       Returns true if the password is ok, or false
 */
const verifyPassword = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

module.exports = {
  encryptPassword,
  verifyPassword,
};

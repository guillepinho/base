const responses = {
  OK: 200,
  CREATED: 201,
  NO_DATA: 204,
};

/**
 * Receives a HTTP String response type and returns its corresponding number.
 * @param {String}    type The HTTP response string.
 * @returns {Number}  The corresponding HTTP response number.
 */
const mapResponse = (type) => responses[type] || 200;

module.exports = mapResponse;

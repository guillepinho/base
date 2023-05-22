const { user } = require('../services');
const mapResponse = require('../utils/mapResponse');
const responseList = require('../utils/responseList');

/**
 * Creates a user in the database
 * @param {Request}   req The request
 * @param {Response}  res The Express response
 * @returns A HTTP Response
 */
const create = async (req, res) => {
  const payload = req.body;
  const message = await user.create(payload);
  return res.status(mapResponse(responseList.CREATED)).json({ message });
};

module.exports = {
  create,
};

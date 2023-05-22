const express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const { createUser } = require('../middlewares/joiSchemas/userSchema');
const { user } = require('../controllers');

const router = express.Router();

router.post('/create', joiValidation(createUser), user.create);

module.exports = router;

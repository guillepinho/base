const express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const { createUser, login } = require('../middlewares/joiSchemas/userSchema');
const { user } = require('../controllers');

const router = express.Router();

router.post('/create', joiValidation(createUser), user.create);
router.post('/login', joiValidation(login), user.login);

module.exports = router;

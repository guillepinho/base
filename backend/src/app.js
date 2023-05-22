const express = require('express');
const cors = require('cors');
require('express-async-errors');

// const routes = require('./routes');
// const passport = require('./utils/passportStrategy');
const errorMiddleware = require('./middlewares/errorMiddleware');
// const validateToken = require('./middlewares/validateToken');

const app = express();

// app.use(passport.initialize());
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).send({ message: 'All good!' }));

app.use(errorMiddleware);

module.exports = app;

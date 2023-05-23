require('dotenv').config();

const {
  DB_HOST, DB_PORT, DB_USER, DB_PASSWORD,
} = process.env;

const config = {
  host: DB_HOST || 'localhost',
  port: DB_PORT || '3360',
  username: DB_USER || 'root',
  password: DB_PASSWORD || 'root',
  database: 'app',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = config;

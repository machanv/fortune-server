const { Sequelize } = require('sequelize');
const {
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require('../config/config.default');

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
});

module.exports = seq;

require("dotenv").config();
const { Sequelize } = require("sequelize");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: `${DB_USER}`,
});


module.exports = {
  conn: sequelize,
};

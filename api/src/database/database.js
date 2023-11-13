require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserFunction = require("../models/Users");
const PurchaseFunction = require("../models/Purchases");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: `${DB_USER}`,
  logging: false,
});

UserFunction(sequelize);
PurchaseFunction(sequelize);
const { Users, Purchases } = sequelize.models;
Users.belongsToMany(Purchases, { through: "usuario_purchase" });
Purchases.belongsToMany(Users, { through: "usuario_purchase" });

module.exports = {
  conn: sequelize,
  Users,
  Purchases,
};

const { DataTypes } = require("sequelize");
const { conn } = require("../database/database");

const Purchases = conn.define(
  "purchases",
  {
    idTable: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Purchases;

const { DataTypes } = require("sequelize");
const sequelize = require("../Database");

const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB("long"),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Contact;

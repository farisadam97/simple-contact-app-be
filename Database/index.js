// const sqlite3 = require("sqlite3").verbose();
// const path = require("path");
// const db = new sqlite3.Database(path.resolve("contact.sqlite"), (err) => {
//   if (err) {
//     console.log("Error opening database :" + err.message);
//   } else {
//     db.run(
//       "CREATE TABLE contact( \
//                contact_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
//                full_name NVARCHAR(40)  NOT NULL,\
//                phone_number NVARCHAR(16),\
//                address NVARCHAR(100),\
//                created_at DATETIME\
//            )",
//       (err) => {
//         if (err) {
//           console.log("Table already exist");
//         }
//       }
//     );
//     console.log("Database connected");
//   }
// });

const { Sequelize, Model, DataTypes } = require("sequelize");
const client = new Sequelize({
  dialect: "sqlite",
  storage: "./contact.sqlite",
});

const Contact = client.define("contact", {
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
});

const db = {};
db.Sequelize = Sequelize;
db.client = client;

db.contact = Contact;

module.exports = db;

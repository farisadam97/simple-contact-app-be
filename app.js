var express = require("express");
var dotenv = require("dotenv");
const cors = require("cors");

var app = express();

dotenv.config();

app.use(cors());

const sequelize = require("./Database");
const Contact = require("./Model/Contact");
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const route = require("./routes");

app.use("/api", route);

module.exports = app;

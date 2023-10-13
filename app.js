var express = require("express");
var dotenv = require("dotenv");
const cors = require("cors");

var app = express();

dotenv.config();

app.use(cors());

require("./Database");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;

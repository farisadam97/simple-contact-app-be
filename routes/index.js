var express = require("express");
var router = express.Router();

const contactRouter = require("./Contact.route");
const userRouter = require("./User.route");

router.use("/contact", contactRouter);

module.exports = router;

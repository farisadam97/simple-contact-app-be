var express = require("express");
var router = express.Router();

const contactRouter = require("./Contact.route");
const authRouter = require("./Auth.route");
const authMiddleware = require("../Middleware/Auth");

// Api route for authentication
router.use("/auth", authRouter);

router.use("/contact", authMiddleware, contactRouter);

module.exports = router;

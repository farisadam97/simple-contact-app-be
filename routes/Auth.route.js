const { Router } = require("express");
const authController = require("../Controller/Auth.controller");
const authRouter = Router();

authRouter.route("/login").post(authController.loginAccount);

module.exports = authRouter;

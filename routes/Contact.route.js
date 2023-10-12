const { Router } = require("express");
const contactRouter = Router();

contactRouter.route("/").get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = contactRouter;

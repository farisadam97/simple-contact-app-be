const { Router } = require("express");
const {
  getAllContacts,
  addContact,
} = require("../Controller/Contact.controller");
const contactRouter = Router();

contactRouter.route("/").get(getAllContacts);
contactRouter.route("/add").post(addContact);

module.exports = contactRouter;

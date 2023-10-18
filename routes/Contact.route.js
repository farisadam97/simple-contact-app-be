const { Router } = require("express");
const {
  getAllContacts,
  addContact,
  deleteContact,
} = require("../Controller/Contact.controller");
const contactRouter = Router();

contactRouter.route("/").get(getAllContacts);
contactRouter.route("/add").post(addContact);
contactRouter.route("/:id").delete(deleteContact);

module.exports = contactRouter;

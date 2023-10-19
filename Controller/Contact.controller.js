const Contact = require("../Model/Contact");
const { successResponse, errorResponse } = require("../Helper/ApiHelper");
const fs = require("fs");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.findAndCountAll();
  successResponse(res, 200, "success", contacts);
};

const addContact = async (req, res) => {
  // const imageBuffer = Buffer.from(req.body.image, "base64");
  try {
    const contact = {
      full_name: req.body.fullName,
      address: req.body.address,
      phone_number: req.body.phoneNumber,
      image: req.body.image,
    };
    const newContact = await Contact.create(contact);
    return res.status(200).json({
      message: "Contact Created",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteContact = async (req, res) => {
  const contact = await Contact.findByPk(req.params.id);
  if (contact) {
    await contact.destroy();
    return res.status(200).json({
      message: "Contact Deleted",
    });
  } else {
    return res.status(404).json({
      message: "Contact can't be found",
    });
  }
};

module.exports = {
  getAllContacts,
  addContact,
  deleteContact,
};

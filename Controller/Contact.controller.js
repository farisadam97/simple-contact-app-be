const Contact = require("../Model/Contact");
const { successResponse, errorResponse } = require("../Helper/ApiHelper");
const fs = require("fs");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.findAndCountAll();
  const dataArr = {
    total: contacts.count,
    data: contacts.rows,
  };
  successResponse(res, 200, dataArr);
};

const addContact = async (req, res) => {
  const { fullName, address, phoneNumber, image } = req.body;

  try {
    const contact = {
      full_name: fullName,
      address: address,
      phone_number: phoneNumber,
      image: image,
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

const updateContact = async (req, res) => {
  const { id, fullName, address, phoneNumber, image } = req.body;
  const contact = await Contact.findByPk();
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

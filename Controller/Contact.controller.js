const Contact = require("../Model/Contact");

const getAllContacts = async (req, res) => {
  const contacts = await Contact.findAndCountAll();
  res.send({
    data: contacts.rows,
    total: contacts.count,
  });
};

const addContact = async (req, res) => {
  const contact = {
    full_name: req.body.fullName,
    address: req.body.address,
    phone_number: req.body.phoneNumber,
  };

  try {
    await Contact.create(contact).then(() => {
      res.sendStatus(201);
    });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  getAllContacts,
  addContact,
};

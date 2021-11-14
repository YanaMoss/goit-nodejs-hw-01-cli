const fs = require("fs/promises");
const contactsPath = require("./contactsPath");
const updateContacts = require("./updateContacts");
const getListContacts = require("./getListContacts");

const removeContactById = async (id) => {
  const contactsList = await getListContacts();
  const newListContacts = contactsList.filter(
    (contact) => String(contact.id) !== id
  );
  if (!newListContacts) {
    return null;
  }
  await updateContacts(newListContacts);
};

module.exports = removeContactById;

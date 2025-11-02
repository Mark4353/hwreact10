import React, { useContext } from "react";
import ContactsContext from "../contexts/ContactsContext";

const ContactList = () => {
  const { visibleContacts, deleteContact } = useContext(ContactsContext);

  return (
    <ul className="contact-list">
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className="contact-list-item">
          <span>
            {name}: {number}
          </span>
          <button className="delete-button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactList;

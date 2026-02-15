import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../redux/contactsReducer";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const visibleContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className="contact-list">
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className="contact-list-item">
          <span>
            {name}: {number}
          </span>
          <button
            className="delete-button"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

import React, { useState, useContext } from "react";
import ContactsContext from "../contexts/ContactsContext";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { addContact } = useContext(ContactsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const added = addContact({ name: name.trim(), number: number.trim() });
    if (added) {
      setName("");
      setNumber("");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="add-contact-button">
        Add contact
      </button>
    </form>
  );
}




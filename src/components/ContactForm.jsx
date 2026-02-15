import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contactsReducer";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    const normalizedNew = trimmedName.toLowerCase();
    const duplicate = contacts.some(
      (c) => c.name.toLowerCase() === normalizedNew
    );
    if (duplicate) {
      alert(`${trimmedName} вже у контактах.`);
      return;
    }
    dispatch(addContact({ name: trimmedName, number: trimmedNumber }));
    setName("");
    setNumber("");
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




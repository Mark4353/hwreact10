import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import ContactsContext from "./contexts/ContactsContext";
import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const genId = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2, 9);

  const addContact = ({ name, number }) => {
    const normalizedNew = name.toLowerCase();
    const duplicate = contacts.some(
      (c) => c.name.toLowerCase() === normalizedNew
    );
    if (duplicate) {
      alert(`${name} вже у контактах.`);
      return false;
    }

    const newContact = { id: genId(), name, number };
    setContacts((prev) => [newContact, ...prev]);
    return true;
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const visibleContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contextValue = {
    addContact,
    deleteContact,
    filter,
    setFilter: handleFilterChange,
    visibleContacts,
  };

  return (

    <ContactsContext.Provider value={contextValue}>
      <div className="app">
        <h1>Phonebook</h1>
        <ContactForm />
        
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </ContactsContext.Provider>

  );
}

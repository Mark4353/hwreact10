import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedNew = name.toLowerCase();
    const duplicate = contacts.some(
      (c) => c.name.toLowerCase() === normalizedNew
    );
    if (duplicate) {
      alert(`${name} вже у контактах.`);
      return false;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState((prev) => ({ contacts: [newContact, ...prev.contacts] }));
    return true;
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((c) => c.id !== id),
    }));
  };

  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter((c) => c.name.toLowerCase().includes(normalized));
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <div className="app">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

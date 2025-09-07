import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const added = this.props.onAddContact({
      name: name.trim(),
      number: number.trim(),
    });
    if (added) {
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit" className="add-contact-button">
          Add contact
        </button>
      </form>
    );
  }
}

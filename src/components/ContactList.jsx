const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="contact-list-item">
        <span>
          {name}: {number}
        </span>
        <button className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

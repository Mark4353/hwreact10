import React, { useContext } from "react";
import ContactsContext from "../contexts/ContactsContext";

const Filter = () => {
  const { filter, setFilter } = useContext(ContactsContext);

  return (
    <div className="filter">
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default Filter;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <div className="filter">
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default Filter;
  

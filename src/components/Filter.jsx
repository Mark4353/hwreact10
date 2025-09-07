const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
    </label>
  </div>
);

export default Filter;

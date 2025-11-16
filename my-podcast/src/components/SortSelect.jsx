import React from "react";
import "./SortSelect.css";

const SortSelect = ({ sortOption, setSortOption }) => {
  return (
    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
      <option value="newest">Newest First</option>
      <option value="title-asc">Title A–Z</option>
      <option value="title-desc">Title Z–A</option>
    </select>
  );
};

export default SortSelect;

import React from 'react';

function SearchBar({ setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by description"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
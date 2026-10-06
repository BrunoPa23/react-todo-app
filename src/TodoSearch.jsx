import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      placeholder="Cortar cebolla"  
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

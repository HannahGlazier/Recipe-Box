import React from "react";

function Search({ searchTerm, setSearchTerm, sortBy, onChangeSortBy }) {
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="ui menu">
      <div className="item">
        <div className="ui search">
          <div className="ui icon input">
            <input
              type="text"
              id="search"
              placeholder="search for recipes..."
              value={searchTerm}
              onChange={(e) => handleSearch(e)}
              className="prompt"
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="right menu">
        <div className="ui item">
          <label>Sort By: </label>
        </div>
        <div className="ui item">
          <select 
            className="ui selection dropdown"
            value={sortBy}
            onChange={(e) => onChangeSortBy(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;

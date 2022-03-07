import React from 'react'

function Search({searchTerm, setSearchTerm}) {

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }

  return (   
    <div>
      <label htmlFor="search">Search Recipe    </label>
      <input
        type="text"
        id="search"
        placeholder="type to search..."
        value={searchTerm}
        onChange={e => handleSearch(e)}
      />
    </div>
  )
}

export default Search
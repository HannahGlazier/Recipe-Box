import React from 'react'

function Search({searchTerm, setSearchTerm}) {

  function handleSearch(e) {
    // e.preventDefault()
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
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
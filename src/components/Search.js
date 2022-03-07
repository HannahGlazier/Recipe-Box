import React from 'react'

function Search() {
  return (   
    <div>
      <label htmlFor="search">Search Recipe    </label>
      <input
        type="text"
        id="search"
        placeholder="type to search..."
      />
    </div>
  )
}

export default Search
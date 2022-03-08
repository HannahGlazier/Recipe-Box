import React from 'react'

function Search({searchTerm, setSearchTerm}) {

  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }

  return (  
    <div className='ui menu'>
    <div className='item'>  
    <div className='ui search'>
      <div className='ui icon input'>
      {/* <label htmlFor="search">Search Recipes    </label> */}
      <input
        type="text"
        id="search"
        placeholder="search for recipes..."
        value={searchTerm}
        onChange={e => handleSearch(e)}
        className="prompt"
      />
      <i class="search icon"></i>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Search
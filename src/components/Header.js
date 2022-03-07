import React from 'react'
import Search from './Search'
import Filter from './Filter'

function Header({searchTerm, setSearchTerm}) {
  return (
    <>
        <div>Header</div>
        <Search 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
        <Filter />
    </>
  )
}

export default Header
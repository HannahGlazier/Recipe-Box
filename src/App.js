import React, { useEffect } from 'react'
import Header from './components/Header'
import RecipeContainer from './components/RecipeContainer'
 

function App() {

  useEffect(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(console.log)
  })

  return (
    <div>
      <Header  
      />
      <RecipeContainer />
    </div>
  );
}

export default App;

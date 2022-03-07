import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import RecipeContainer from './components/RecipeContainer'


function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  return (
    <div>
      <Header />
      <RecipeContainer recipes={recipes}/>
    </div>
  );
}

export default App;

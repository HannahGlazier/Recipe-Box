import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import RecipeContainer from './components/RecipeContainer'


function App() {
  const [recipes, setRecipes] = useState([])
  const [recipesToTry, setRecipesToTry] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  function handleAddToTryList(recipe) {
    if(!recipesToTry.includes(recipe)){
      setRecipesToTry([...recipesToTry, recipe])
    }
  }

  // const searchedRece

  return (
    <div>
      <Header />
      <RecipeContainer
      recipes={recipes}
      recipesToTry={recipesToTry}
      onAddClick={handleAddToTryList}
      />
    </div>
  );
}

export default App;

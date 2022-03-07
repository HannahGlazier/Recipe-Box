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

  // const searchedRecipe = recepie.filter((recepie) =>
    
  //)

  function handleRemoveFromTryList(recipe){
    const newTryList = recipesToTry.filter(individualRecipe => individualRecipe !== recipe)
    setRecipesToTry(newTryList)
  }
  
  return (
    <div>
      <Header />
      <RecipeContainer
        recipes={recipes}
        recipesToTry={recipesToTry}
        onAddClick={handleAddToTryList}
        onRemoveClick={handleRemoveFromTryList}
      />
    </div>
  );
}

export default App;

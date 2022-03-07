import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import RecipeContainer from './components/RecipeContainer'


function App() {
  const [recipes, setRecipes] = useState([])
  const [recipesToTry, setRecipesToTry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const searchedRecipe = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleRemoveFromTryList(recipe){
    const newTryList = recipesToTry.filter(individualRecipe => individualRecipe !== recipe)
    setRecipesToTry(newTryList)
  }
  
  return (
    <div>
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      <RecipeContainer
        recipes={searchedRecipe}
        recipesToTry={recipesToTry}
        onAddClick={handleAddToTryList}
        onRemoveClick={handleRemoveFromTryList}
      />
    </div>
  );
}

export default App;

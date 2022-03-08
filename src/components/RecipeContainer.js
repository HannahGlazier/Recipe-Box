import React, {useEffect, useState} from 'react'
import RecipeList from './RecipeList'
import RecipesToTry from './RecipesToTry'
import Search from './Search'
import AddRecipe from './AddRecipe'

function RecipeContainer(){

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

  function handleAddNewRecipe(newRecipe){
    setRecipes([...recipes, newRecipe])
  }

  const searchedRecipe = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleRemoveFromTryList(recipe){
    const newTryList = recipesToTry.filter(individualRecipe => individualRecipe !== recipe)
    setRecipesToTry(newTryList)
  }

  return (
    <>
      <Search
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm}
      />
      <RecipesToTry 
        recipesToTry={recipesToTry}
        onRecipeClick={handleRemoveFromTryList}
      />
      <RecipeList 
        recipes={searchedRecipe}
        onRecipeClick={ handleAddToTryList}
      />
      <AddRecipe addNewRecipe={handleAddNewRecipe}/>
    </>
  )
}

export default RecipeContainer

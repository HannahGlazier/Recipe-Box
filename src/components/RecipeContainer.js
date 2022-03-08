import React from 'react'
import RecipeList from './RecipeList'
import RecipesToTry from './RecipesToTry'
import Search from './Search'
// import AddRecipe from './AddRecipe'

function RecipeContainer({
  recipes, 
  // handleAddNewRecipe, 
  handleAddToTryList, 
  handleRemoveFromTryList, 
  setSearchTerm, 
  searchTerm,
  recipesToTry
})
{

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
        recipes={recipes}
        onRecipeClick={handleAddToTryList}
      />
      {/* <AddRecipe 
        addNewRecipe={handleAddNewRecipe}
      /> */}
    </>
  )
}

export default RecipeContainer

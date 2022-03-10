import React from 'react'
import RecipeList from './RecipeList'
import RecipesToTry from './RecipesToTry'
import Search from './Search'


function RecipeContainer({
  recipes, 
  handleAddToTryList, 
  handleRemoveFromTryList, 
  setSearchTerm, 
  searchTerm,
  recipesToTry,
  onRemoveRecipe,
  sortBy,
  onChangeSortBy
})
{

  return (
    <>
      <Search
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        onChangeSortBy={onChangeSortBy}
      />
      <RecipesToTry 
        recipesToTry={recipesToTry}
        onRecipeClick={handleRemoveFromTryList}
        onRemoveRecipe={onRemoveRecipe}
      />
      <RecipeList 
        recipes={recipes}
        onRecipeClick={handleAddToTryList}
        onRemoveRecipe={onRemoveRecipe}
      />
    </>
  )
}

export default RecipeContainer

import React from 'react'
import RecipeList from './RecipeList'
import RecipesToTry from './RecipesToTry'

function RecipeContainer({ recipes, recipesToTry, onAddClick, onRemoveClick }){

  return (
    <>
      <div>Recipe Container</div>
      <RecipesToTry 
        recipesToTry={recipesToTry}
        onRecipeClick={onRemoveClick}
      />
      <RecipeList 
        recipes={recipes}
        onRecipeClick={onAddClick}
      />
    </>
  )
}

export default RecipeContainer
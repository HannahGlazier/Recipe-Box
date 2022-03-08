import React from 'react'
import RecipeCard from './RecipeCard'

function RecipesToTry( {recipesToTry, onRecipeClick, onRemoveRecipe} ) {
  const mappedRecipesToTry = recipesToTry.map(recipe => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
      id={recipe.id}
      onRecipeClick={onRecipeClick}
      onRemoveRecipe={onRemoveRecipe}
    />
  ))

  return (
    <>
    <div className="ui four stackable cards recipeTile">{mappedRecipesToTry}</div>
    </>
  )
}

export default RecipesToTry
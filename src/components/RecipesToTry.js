import React from 'react'
import RecipeCard from './RecipeCard'

function RecipesToTry( {recipesToTry, onRecipeClick} ) {
  const mappedRecipesToTry = recipesToTry.map(recipe => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
      onRecipeClick={onRecipeClick}
    />
  ))

  return (
    <>
    <div className="ui four stackable cards recipeTile">{mappedRecipesToTry}</div>
    </>
  )
}

export default RecipesToTry
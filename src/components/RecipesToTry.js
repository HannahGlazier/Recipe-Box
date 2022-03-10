import React from 'react'
import '../index.css'
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
      <h1>My Recipe List</h1>
      <div className="border">
        <div className="ui five cards">{mappedRecipesToTry}</div>
      </div>
    </>
  )
}

export default RecipesToTry
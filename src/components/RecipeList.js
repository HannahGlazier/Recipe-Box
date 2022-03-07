import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({ recipes, onRecipeClick }) {
  // console.log(recipes)
  const mappedRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
      onRecipeClick={onRecipeClick}
    />
  ))
  
  return (
    <>
    <div className="ui four stackable cards">{mappedRecipes}</div>
    </>
  )
}

export default RecipeList

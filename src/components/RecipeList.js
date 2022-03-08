import React from 'react'
import RecipeCard from './RecipeCard'


function RecipeList({ recipes, onRecipeClick }) {
  const mappedRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
      onRecipeClick={onRecipeClick}
    />
  ))
  
  return (
    <>
    <div className="ui four stackable cards recipeTile">{mappedRecipes}</div>
    </>
  )
}

export default RecipeList


import React from 'react'
import RecipeCard from './RecipeCard'


function RecipeList({ recipes, onRecipeClick, onRemoveRecipe }) {
  const mappedRecipes = recipes.map(recipe => (
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
    <div className="ui four stackable cards recipeTile">{mappedRecipes}</div>
    </>
  )
}

export default RecipeList


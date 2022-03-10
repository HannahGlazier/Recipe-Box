import React from 'react'
import '../index.css'
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
      <h1>Recipe Library</h1>
      <div className="border">
        <div className="ui five cards">{mappedRecipes}</div>
      </div>
    </>
  )
}

export default RecipeList


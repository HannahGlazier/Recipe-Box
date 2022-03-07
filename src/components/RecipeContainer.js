import React from 'react'
import RecipeList from './RecipeList'
import RecipesToTry from './RecipesToTry'

function RecipeContainer({ recipes }){

  return (
    <>
      <div>Recipe Container</div>
      <RecipeList recipes={recipes}/>
    </>
  )
}

export default RecipeContainer
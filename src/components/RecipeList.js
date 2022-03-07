import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({ recipes }) {
  // console.log(recipes)
  const mappedRecipes = recipes.map(recipe => (
    <RecipeCard
      key={recipe.id}
      recipe={recipe}
    />
  ))
  
  return (
    <>
    <div>RecipeList</div>
    {mappedRecipes}
    </>
  )
}

export default RecipeList


// {recipes.map((recepie) => (
//   <RecipeCard
//     key={recepie.name}
//     recepie={recepie}
//   />
// ))}
//   {/* {recipes.map(recipe => (
//   <RecipeCard
//     key={recipe.id}
//     recipe={recipe}} */}
// {/* /> */}

// {/* {mappedRecipes} */}
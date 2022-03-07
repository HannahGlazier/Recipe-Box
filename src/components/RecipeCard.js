import React from 'react'

function RecipeCard({ recipe }) {
  const mappedIngredientName = recipe.ingredients.map(ingredient => (
    <ul key={ingredient.name + ingredient.quantity}>
      <li>Name: {ingredient.name}</li>
      <li>Quantity: {ingredient.quantity}</li>
      <li>Type: {ingredient.type}</li>
    </ul>
  ))

  const recipeSteps = recipe.steps.map(step => (
    <ul key={step}>
      <li>{step} </li>
    </ul>
  ))
  
  return (
    <div className="ui card recipeTile">
    <h4>{recipe.name}</h4>
    <img src={recipe.imageURL} alt={recipe.name}/>
    <h5>{mappedIngredientName}</h5>
    {recipeSteps}
 
    </div>
  )
}

export default RecipeCard
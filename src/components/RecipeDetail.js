import React from 'react'

function RecipeDetail({ recipe }) {
    const mappedIngredientName = recipe.ingredients.map(ingredient => (
        <ul key={ingredient.name + ingredient.quantity}>
            <li>Name: {ingredient.name}</li>
            <li>Quantity: {ingredient.quantity}</li>
        </ul>

    ))

    const recipeSteps = recipe.steps.map(step => (
        <ul key={step}>
            <li>{step} </li>
        </ul>
    ))
    return (
        <div>
            <h5>{mappedIngredientName}</h5>
            {recipeSteps}
        </div>
    )
}

export default RecipeDetail
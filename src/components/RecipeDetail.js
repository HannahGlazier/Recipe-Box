import React from 'react'

function RecipeDetail({ recipe }) {
    return (
        <div>
            <h5>Ingredients: {recipe.ingredients}</h5>
            <h5>Steps: {recipe.steps}</h5>
        </div>
    )
}

export default RecipeDetail

    // const mappedIngredientName = recipe.ingredients.map(ingredient => (
    //     <ul key={ingredient.name + ingredient.quantity}>
    //         <li>Name: {ingredient.name}</li>
    //         <li>Quantity: {ingredient.quantity}</li>
    //     </ul>
    // ))

    // const recipeSteps = recipe.steps.map(step => (
    //     <ul key={step}>
    //         <li>{step} </li>
    //     </ul>
    // ))
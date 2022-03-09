import React from 'react'

function RecipeDetail({ recipe }) {
    const splitIngredients = recipe.ingredients.split(',')
    const newSplitIngredient = splitIngredients.map(ingredient => (
        <ul key={ingredient + recipe}>
            <li>{ingredient}</li>
        </ul>
    ))
    
        const splitSteps = recipe.steps.split('.')
        const newSplitSteps = splitSteps.map(step => (
            <ul key={step + recipe}>
                <li>{step}</li>
            </ul>
        ))

    return (
        <div>
            <h5>Ingredients: {newSplitIngredient}</h5>
            <h5>Steps: {newSplitSteps}</h5>
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
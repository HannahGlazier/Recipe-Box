import React, {useState} from 'react'
import RecipeDetail from './RecipeDetail'

function RecipeCard({ recipe, onRecipeClick }) {
  const [showDetail, setShowDetail] = useState(false)

  function handleDetail(e, showDetail){
    e.stopPropagation()
    setShowDetail(!showDetail)
  }

  return (
    <div 
    className="ui card"
    onClick={(e) => onRecipeClick(e, recipe)}
    >
      <h4>{recipe.name}</h4>
      <img src={recipe.imageURL} alt={recipe.name}/>
      {showDetail && <RecipeDetail recipe={recipe} />}
      <button
        className="ui button"
        onClick={(e) => handleDetail(e, showDetail)}>
          {showDetail ? "Hide Details" : "Show Details"}
      </button>
    </div>
  )
  }

export default RecipeCard












// import React from 'react'

// function RecipeCard({ recipe, onRecipeClick }) {
//   const mappedIngredientName = recipe.ingredients.map(ingredient => (
//     <ul key={ingredient.name + ingredient.quantity}>
//       <li>Name: {ingredient.name}</li>
//       <li>Quantity: {ingredient.quantity}</li>
//       <li>Type: {ingredient.type}</li>
//     </ul>
//   ))

//   const recipeSteps = recipe.steps.map(step => (
//     <ul key={step}>
//       <li>{step} </li>
//     </ul>
//   ))
  
//   return (
//     <div 
//     className="ui card"
//     onClick={() => onRecipeClick(recipe)}
//     >
//     <h4>{recipe.name}</h4>
//     <img src={recipe.imageURL} alt={recipe.name}/>
//     {/* <h5>{mappedIngredientName}</h5>
//     {recipeSteps} */}
 
//     </div>
//   )
// }

// export default RecipeCard
import React, {useState} from 'react'

function AddRecipe({ addNewRecipe }) {
  const [formRecipeData, setFormRecipeData] = useState({ 
    name: "",
    ingredients: {
        quantity: "",
        name:""
    },
    steps:"",
    imgURL:"",
    originalURL:""
  })
  
  function handleChange(e) {
    setFormRecipeData({
      ...formRecipeData,
      [e.target.name]: e.target.value
    })
  }
  
  function handleAddRecipeData(e) {
    e.preventDefault()
    
    const newRecipe = {
        name: formRecipeData.name,
        ingredients: { 
          quantity: formRecipeData.ingredients.quantity,
          name: formRecipeData.ingredients.name,
      },
        steps: formRecipeData.steps,
        imgURL: formRecipeData.imgURL,
        originalURL: formRecipeData.originalURL
    }

    fetch('http://localhost:3000/recipes', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe)
    })
      .then(response => response.json())
      .then(addNewRecipe)
  }


  return (
    <>
      <div>AddRecipe</div>
      <form onSubmit={(e => handleAddRecipeData(e))}>
      <label htmlFor="recipeName">Recipe Name: </label>
        <input
            type="text"
            name="name"
            value={formRecipeData.name}
            id={FormData.name}
            onChange={(e => handleChange(e))}
        >
        </input>
        
      </form>
    </>
  )

}



export default AddRecipe
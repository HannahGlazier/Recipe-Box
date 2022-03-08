import React, {useState} from 'react'

function AddRecipe({ addNewRecipe }) {
  const [formRecipeData, setFormRecipeData] = useState({ 
    name: "",
    ingredients: "",
    steps:"",
    imageURL:"",
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
        ingredients: formRecipeData.ingredients,
        steps: formRecipeData.steps,
        imageURL: formRecipeData.imageURL,
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
        <br></br>
        <label htmlFor="ingredients">Ingredients: </label>
        <textarea
            type="text"
            name="ingredients"
            value={formRecipeData.ingredients}
            id={FormData.ingredients}
            onChange={(e => handleChange(e))}
            rows="4"
            cols="50"
        >
        </textarea>
        <br></br>
        <label htmlFor="steps">Recipe Steps: </label>
        <textarea
            type="text"
            name="steps"
            value={formRecipeData.steps}
            id={FormData.steps}
            onChange={(e => handleChange(e))}
            rows="4"
            cols="50"
        >
        </textarea>
        <br></br>
        <label htmlFor="imageURL">Image URL: </label>
        <input
            type="text"
            name="imageURL"
            value={formRecipeData.imageURL}
            id={FormData.imageURL}
            onChange={(e => handleChange(e))}
        >
        </input>
        <br></br>
        <label htmlFor="originalURL">Source URL: </label>
        <input
            type="text"
            name="originalURL"
            value={formRecipeData.originalURL}
            id={FormData.originalURL}
            onChange={(e => handleChange(e))}
        >
        </input>
        <br></br>
        <button type="submit">Add Recipe</button>
      </form>
    </>
  )

}



export default AddRecipe
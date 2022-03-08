import React, {useState, useEffect, useRef} from 'react'

function AddRecipe({ addNewRecipe }) {
  const [formRecipeData, setFormRecipeData] = useState({ 
    name: "",
    ingredients: "",
    steps:"",
    imageURL:"",
    originalURL:""
  })

  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current.focus()
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
    <div className="border">
      <br></br>
      <h1 className="addRecipe">AddRecipe</h1>
      <form className='ui form' onSubmit={(e => handleAddRecipeData(e))}>
      <div className='required six wide field'>
      <label htmlFor="recipeName">Recipe Name: </label>
        <input
            type="text"
            name="name"
            ref={nameInputRef}
            value={formRecipeData.name}
            id={FormData.name}
            onChange={(e => handleChange(e))}
            placeholder="Recipe Name"
        >
        </input>
        </div>
        <div className='required six wide field'>
        <label htmlFor="ingredients">Ingredients: </label>
        <textarea
            type="text"
            name="ingredients"
            value={formRecipeData.ingredients}
            id={FormData.ingredients}
            onChange={(e => handleChange(e))}
            rows="4"
            cols="50"
            placeholder="List Ingredients"
        >
        </textarea>
        </div>
        <div className='required six wide field'>
        <label htmlFor="steps">Recipe Steps: </label>
        <textarea
            type="text"
            name="steps"
            value={formRecipeData.steps}
            id={FormData.steps}
            onChange={(e => handleChange(e))}
            rows="4"
            cols="50"
            placeholder="List Recipe Steps"
        >
        </textarea>
        </div>
        <div className='six wide field'>
        <label htmlFor="imageURL">Image URL: </label>
        <input
            type="text"
            name="imageURL"
            value={formRecipeData.imageURL}
            id={FormData.imageURL}
            onChange={(e => handleChange(e))}
            placeholder="Image Link"
        >
        </input>
        </div>
        <div className='six wide field'>
        <label htmlFor="originalURL">Source URL: </label>
        <input
            type="text"
            name="originalURL"
            value={formRecipeData.originalURL}
            id={FormData.originalURL}
            onChange={(e => handleChange(e))}
            placeholder="Source Link"
        >
        </input>
        </div>
        <button className="ui submit button" type="submit">Add Recipe</button>
      </form>
    </div>
  )

}



export default AddRecipe
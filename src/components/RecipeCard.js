import React, {useState} from 'react'
import { FiTrash2 } from 'react-icons/fi'
import RecipeDetail from './RecipeDetail'

function RecipeCard({ recipe, onRecipeClick, onRemoveRecipe }) {
  const [showDetail, setShowDetail] = useState(false)
  const [likes, setLikes] = useState(recipe.likes)

  function handleDetail(e, showDetail){
    e.stopPropagation()
    setShowDetail(!showDetail)
  }

  function handleAddLike(e) {
    e.stopPropagation()
    fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({likes: likes + 1})
    })
      .then(() => setLikes((likes) => likes + 1))
  }

  function handleDelete(e){
    e.stopPropagation()
    onRemoveRecipe(recipe)
  }

  return (
    <div 
    className="ui card background"
    onClick={(e) => onRecipeClick(e, recipe)}
    >
      <div className= "background">
        <h5>{recipe.name}</h5>
      </div>
      <img src={recipe.imageURL} alt={recipe.name}/>
      {showDetail && <RecipeDetail recipe={recipe} />} 
      <button className="ui basic button" onClick={handleAddLike}> {likes ? `★ ${likes}` : ` ☆ ${likes}`} </button>
      <button className="ui basic button" onClick={e => handleDelete(e)}><FiTrash2 /></button>
      <button
        className="ui button"
        onClick={(e) => handleDetail(e, showDetail)}>
          {showDetail ? "Hide Details" : "Show Details"}
      </button>
    </div>
  )
  }

export default RecipeCard




 // const updatedRecs = recipies.map(rec => rec.id == id ? {...rec, likes: likes + 1} : rec)
  // setRecipes(updatedRecs)

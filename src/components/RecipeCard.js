import React, {useState} from 'react'
import { FiTrash2 } from 'react-icons/fi'
import RecipeDetail from './RecipeDetail'

function RecipeCard({ recipe, onRecipeClick, onRemoveRecipe }) {
  const [showDetail, setShowDetail] = useState(false)
  const [likes, setLikes] = useState(0)

  function handleDetail(e, showDetail){
    e.stopPropagation()
    setShowDetail(!showDetail)
  }

  function handleLike(e) {
    e.stopPropagation()
    setLikes((likes) => likes + 1)
  }

  // function handleAddLike(e) {
  //   e.stopPropagation()
  //   fetch('http://localhost:3000/recipes', {
  //     method: "POST", 
  //     headers: {
  //       "Content-Type": "application/json"
  //     }, 
  //     body: JSON.stringify(likes)
  //   })
  //     .then(response => response.json())
  //     .then(handleLike(likes))
  // }
    
  function handleDelete(e){
    e.stopPropagation()
    onRemoveRecipe(recipe)
  }

  return (
    <div 
    className="ui card"
    onClick={(e) => onRecipeClick(e, recipe)}
    >
      <h4>{recipe.name}</h4>
      <img src={recipe.imageURL} alt={recipe.name}/>
      {showDetail && <RecipeDetail recipe={recipe} />}
      <button onClick={handleLike}> ♡ {likes} </button>
      <button onClick={e => handleDelete(e)}><FiTrash2 /></button>
      <button
        className="ui button"
        onClick={(e) => handleDetail(e, showDetail)}>
          {showDetail ? "Hide Details" : "Show Details"}
      </button>
      
    </div>
  )
  }

export default RecipeCard

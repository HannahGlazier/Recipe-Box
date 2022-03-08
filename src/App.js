import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import RecipeContainer from './components/RecipeContainer'
import About from './components/About';
import AddRecipe from './components/AddRecipe';
import './index.css';

function App() {

  const [recipes, setRecipes] = useState([])
  const [recipesToTry, setRecipesToTry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  function handleAddToTryList(e, recipe) {
    e.stopPropagation() 
    if(!recipesToTry.includes(recipe)){
      setRecipesToTry([...recipesToTry, recipe])
    }
  }

  function handleAddNewRecipe(newRecipe){
    setRecipes([...recipes, newRecipe])
  }

  const searchedRecipe = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleRemoveFromTryList(e, recipe){
    e.stopPropagation()
    const newTryList = recipesToTry.filter(individualRecipe => individualRecipe !== recipe)
    setRecipesToTry(newTryList)
  }

  function handleRemoveRecipe(recipe){

    fetch(`http://localhost:3000/recipes/${recipe.id}`, {method: "DELETE"})
    
    const newRecipes = recipes.filter(recipeId => recipeId !== recipe)
    setRecipes(newRecipes)
    const newTryList = recipesToTry.filter(individualRecipe => individualRecipe !== recipe)
    setRecipesToTry(newTryList)

  }
  

    return (
    
    <div className = "App">
        <NavBar />
        <Switch>
          <Route exact path='/' >
            <RecipeContainer
              recipes={searchedRecipe}
              recipesToTry={recipesToTry}
              // handleAddNewRecipe={handleAddNewRecipe}
              handleAddToTryList={handleAddToTryList}
              handleRemoveFromTryList={handleRemoveFromTryList}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              onRemoveRecipe={handleRemoveRecipe}
            />
          </Route>
          <Route path="/about">
            <About />  
          </Route>
          <Route path="/addRecipe">
            <AddRecipe 
            addNewRecipe={handleAddNewRecipe} 
            />  
          </Route>
        </Switch>
    </div>
  );
}

export default App;

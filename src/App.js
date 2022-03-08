import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import RecipeContainer from './components/RecipeContainer'
import About from './components/About';
import AddRecipe from './components/AddRecipe';

function App() {

  const [recipes, setRecipes] = useState([])
  const [recipesToTry, setRecipesToTry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then(response => response.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  function handleAddToTryList(recipe) {
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

  function handleRemoveFromTryList(recipe){
    const newTryList = recipesToTry.filter(individualRecipe => individualRecipe !== recipe)
    setRecipesToTry(newTryList)
  }


    return (
    
    <div>
        <NavBar />
        <Switch>
          <Route exact path='/' >
            <RecipeContainer
              recipes={searchedRecipe}
              recipesToTry={recipesToTry}
              handleAddNewRecipe={handleAddNewRecipe}
              handleAddToTryList={handleAddToTryList}
              handleRemoveFromTryList={handleRemoveFromTryList}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
          </Route>
          <Route path="/about">
            <About />  
          </Route>
          <Route path="/addRecipe">
            <AddRecipe />  
          </Route>
        </Switch>
    </div>
  );
}

export default App;

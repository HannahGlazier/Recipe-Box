import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import RecipeContainer from './components/RecipeContainer'
import About from './components/About';
import AddRecipe from './components/AddRecipe';
import Header from './components/Header';
import './index.css';

function App() {

  const [recipes, setRecipes] = useState([])
  const [recipesToTry, setRecipesToTry] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState('default')

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

  const searchedSortedRecipe = recipes
    .filter(recipe =>recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((recipe1, recipe2) => {
        if(sortBy === 'default'){
          return recipe1.id - recipe2.id
        } else {
            return recipe1.name.localeCompare(recipe2.name)
  }
  })

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
      <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' >
            <RecipeContainer
              recipes={searchedSortedRecipe}
              recipesToTry={recipesToTry}
              // handleAddNewRecipe={handleAddNewRecipe}
              handleAddToTryList={handleAddToTryList}
              handleRemoveFromTryList={handleRemoveFromTryList}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              onRemoveRecipe={handleRemoveRecipe}
              sortBy={sortBy}
              onChangeSortBy={setSortBy}
            />
          </Route>
          <Route path="/about">
            <About recipes={recipes}/>  
          </Route>
          <Route path="/addRecipe">
            <AddRecipe addNewRecipe={handleAddNewRecipe} />  
          </Route>
        </Switch>
    </div>
  );
}

export default App;

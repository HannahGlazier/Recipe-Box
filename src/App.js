import React, { useEffect, useState } from 'react'
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import RecipeContainer from './components/RecipeContainer'
import About from './components/About';
import AddRecipe from './components/AddRecipe';

function App() {

    return (
    
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <RecipeContainer/>
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

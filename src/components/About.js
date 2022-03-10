import React from 'react'
import '../index.css'
import { SiGithub } from "react-icons/si"

function About() {
  return (
    <div>
      <br></br>
      <h1 className='about'>About</h1>
      <div className='border'>
        <p>
          Welcome to Recipe Box! This is a react application that we built for our phase 2 project at Flatiron School.
        </p>

        <p>
          This app starts you off with some of our favorite recipes. 
          If you would like to try a recipe, you click on the recipe and add it to your "My Recipe List". 
          If you are not interested in any specific recipe, then you can delete it from the page.
          You can also add your own recipes to the list by going to the "Add Recipe" page.
          You can also sort and search by recipe name.
        </p>

        <p className="divider"></p>

        <h2>Created by</h2>
          <a href="https://github.com/HannahGlazier" target="_blank" rel="noreferrer"><SiGithub />  Hannah Glazier</a>
          <br></br>
          <a href="https://github.com/8eth" target="_blank" rel="noreferrer" ><SiGithub />  Beth Fekadu</a>
      </div>
    </div>
  )
}

export default About
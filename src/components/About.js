import React from 'react'
import '../index.css'
import { SiGithub } from "react-icons/si"

function About() {
  return (
    <div>
      <h1 className='about'>About</h1>
      <div className='border'>
        <a href="https://github.com/HannahGlazier" target="_blank" rel="noreferrer"><SiGithub />Hannah Glazier</a>
        <br></br>
        <a href="https://github.com/8eth" target="_blank" rel="noreferrer" ><SiGithub />Beth Fekadu</a>
      </div>
    </div>
  )
}

export default About
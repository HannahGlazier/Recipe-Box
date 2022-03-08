import React from 'react'
import '../index.css'
import { SiGithub } from "react-icons/si"

function About() {
  return (
    <div className='border'>
      <h1 className='about'>About</h1>
      <a href="https://github.com/HannahGlazier" target="_blank" rel="noreferrer"><SiGithub />Hannah Glazier</a>
      <br></br>
      <a href="https://github.com/8eth" target="_blank" rel="noreferrer" ><SiGithub />Beth Fekadu</a>
    </div>
  )
}

export default About
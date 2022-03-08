import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiPlusSquare } from 'react-icons/fi'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        className='ui button'
      
        activeStyle={{
          background: "grey",
        }}
      >
        <FiHome /> Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        className='ui button'
        activeStyle={{
          background: "grey",
        }}
      >
      <FiInfo /> About
      </NavLink>
      <NavLink
        to="/AddRecipe"
        exact
        className='ui button'
        activeStyle={{
          background: "grey",
        }}
      >
        <FiPlusSquare />Add Recipe
      </NavLink>
    </div>
  );
}

export default NavBar;
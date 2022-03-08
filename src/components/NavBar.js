import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiPlusSquare, FiInbox } from 'react-icons/fi'

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
      <FiInbox/> Recipe Box
      <div className='navStyling'>
      <NavLink
        to="/"
        exact
        className='ui button'
      
        activeStyle={{
          background: "#949494",
        }}
      >
        <FiHome /> Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        className='ui button'
        activeStyle={{
          background: "#949494",
        }}
      >
      <FiInfo /> About
      </NavLink>
      <NavLink
        to="/AddRecipe"
        exact
        className='ui button'
        activeStyle={{
          background: "#949494",
        }}
      >
        <FiPlusSquare />Add Recipe
      </NavLink>
    </div>
    </div>
  );
}

export default NavBar;
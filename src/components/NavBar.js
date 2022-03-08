import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiPlusSquare, FiInbox } from 'react-icons/fi'

// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

function NavBar() {
  return (
    <div className="ui three item menu">
    {/* <FiInbox className='header item'/> Recipe Box */}
      <NavLink
        to="/"
        exact
        className='active item'
      
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        <FiHome /> Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        className='item'
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
      <FiInfo /> About
      </NavLink>
      <NavLink
        to="/AddRecipe"
        exact
        className='item'
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        <FiPlusSquare />Add Recipe
      </NavLink>
    </div>
  );
}

export default NavBar;
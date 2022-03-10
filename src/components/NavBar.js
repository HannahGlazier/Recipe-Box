import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiPlusSquare } from "react-icons/fi";

function NavBar() {
  return (
    <div className="ui three item menu">
      <NavLink
        to="/"
        exact
        className="active item"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        <FiHome /> Home
      </NavLink>
      <NavLink
        to="/AddRecipe"
        exact
        className="item"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        <FiPlusSquare />
        Add Recipe
      </NavLink>
      <NavLink
        to="/about"
        exact
        className="item"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        <FiInfo /> About
      </NavLink>
    </div>
  );
}

export default NavBar;

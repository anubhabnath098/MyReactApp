import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";
function Navbar() {
  const navStyle = {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    height: "10vh",
    backgroundColor: "purple",
    alignItems: "center",
    paddingLeft: "1rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    zIndex: "100",
  };

  return (
    <div className="navbar" style={navStyle}>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "none" : "none",
            };
          }}
          to="/MyReactApp"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "none" : "none",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "white",
              textDecoration: isActive ? "none" : "none",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </div>
  );
}

export default Navbar;

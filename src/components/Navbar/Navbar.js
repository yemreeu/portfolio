import React from "react";
import { Link,  } from "react-router-dom";
import "./styles.scss"
import { BackButton } from "../BackButton";


function Navbar() {
  return (
    <nav className="navbar">
      
      <ul className="navbar__list">
        <li><BackButton /></li>
        <li className="navbar__list__elements">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__list__elements">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__list__elements">
          <Link to="/portfolio">Projects</Link>
        </li>
        <li className="navbar__list__elements">
          <Link to="/services">Services</Link>
        </li>
        <li className="navbar__list__elements">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons";
import "./Header.css";
function Header() {
  return (
    <div className="Nav-element">
      <ul className="Nav-bar-list">
        <li>
          <Link to="/" className="List">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="List">
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className="List">
            Signup
          </Link>
        </li>
      </ul>
      <div>{/* <FaBars /> */}</div>
    </div>
  );
}
export default Header;

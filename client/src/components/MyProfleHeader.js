import React from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons";
import "./MyProfileHeader.css";
import PopUp from "./PopUp";
function MyProfileHeader() {
  return (
    <div className="Nav-element">
      <ul className="Nav-bar-list-pro">
        <li>
          <Link to="/" className="List-pro">
            Home
          </Link>
        </li>

        <li>
          <Link to="/Dashboard" className="List-pro">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/login" className="List-pro">
            LogOut
          </Link>
        </li>
        <li>
          <PopUp className="popup"></PopUp>
        </li>
      </ul>
    </div>
  );
}
export default MyProfileHeader;

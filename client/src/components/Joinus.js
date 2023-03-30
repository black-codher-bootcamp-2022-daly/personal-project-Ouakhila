import React from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons";
import "./Joinus.css";
function Joinus() {
  return (
    <div>
      <div className="joinus-content">
        <h1>Join women traveler</h1>
        <p1 className="p1">
          Women traveler around the world are ready to meet,
          <br />
          explore and share amazing experience with you
        </p1>
        <div className="btn-div">
          {" "}
          <button className="btn">Register here</button>
        </div>
      </div>
    </div>
  );
}
export default Joinus;

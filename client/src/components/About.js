import React from "react";
import women from "../images/women.jpg";
import "./About.css";
import Footer from "./Footer";
import Header from "./Header";
import Joinus from "./Joinus";
function About() {
  return (
    <div>
      <div> {/* <Header></Header> */}</div>
      <div className="divAbout">
        <img src={women} alt="" className="imageWomen" />
        <div className="div-text">
          <h1> About Us</h1>
          <p>
            {" "}
            Travel buddies is a platform that allow women travelers from any
            background to find a travel buddy based on their interest, location
            and many more
          </p>
        </div>
      </div>
      <div>
        <Joinus></Joinus>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default About;

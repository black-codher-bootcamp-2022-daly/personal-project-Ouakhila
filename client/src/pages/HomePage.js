import React from "react";
// import images from "../images/travelimg.jpg";
import Header from "../components/Header";
import "./HomePage.css";
import Video from "../components/Video";
import Welcome from "./Welcome";
import About from "../components/About";
import Joinus from "../components/Joinus";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <Video></Video>
      <About id="some-about"></About>
      {/* <Joinus></Joinus>
      <Footer></Footer> */}
    </div>
  );
}

export default HomePage;

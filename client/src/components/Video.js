import React from "react";
import "./Video.css";
import travelImage from "../images/travelme.jpg";

function Video() {
  return (
    <div className="all-img-content">
      <img src={travelImage} alt="" />
      {/* <video
        autoPlay
        loop
        muted
        // controls="controls"

        // width="1500"
        // height="1000"
      >
        <source src={travelImage} type="video/mp4" id="video" />
      </video> */}
      <div>
        <div className="content">
          {" "}
          <h1> Buddy Findher</h1>
          <p>Safe space for women to meet and travel </p>
        </div>
      </div>
    </div>
  );
}

export default Video;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
// import "../components/ImageLogin";
import LogImg from "../images/loginimg.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Joinus from "../components/Joinus";

function LoginPage() {
  const navigate = useNavigate();

  const navigateToMyprofile = () => {
    navigate("/myprofile");
  };

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <div className="page">
          <img src={LogImg} alt="" id="logImg" />
          <div className="loginP">
            <h1>Login Here</h1>
            <input type="text" placeholder="email" />

            <input type="password" placeholder="password" />

            <button onClick={navigateToMyprofile} className="btn">
              Login
            </button>
            <div>
              {" "}
              <p>Do you have an account?</p>
              <div>Register here</div>
            </div>
          </div>
          {/* <ImageLogin></ImageLogin> */}
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default LoginPage;

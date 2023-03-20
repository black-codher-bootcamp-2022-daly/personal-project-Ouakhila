import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
// import "../components/ImageLogin";
// import ImageLogin from "../components/ImageLogin";

function LoginPage() {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/Dashboard");
  };

  return (
    <div>
      <div className="page">
        <div className="loginP">
          <h1>Register Here</h1>
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="surname" />
          <input type="password" placeholder="password" />

          <button onClick={navigateToDashboard}>Sign Up</button>
          <div>
            {" "}
            <p>Do you have an account?</p>
            <div>Login here</div>
          </div>
        </div>
        {/* <ImageLogin></ImageLogin> */}
      </div>
    </div>
  );
}
export default LoginPage;

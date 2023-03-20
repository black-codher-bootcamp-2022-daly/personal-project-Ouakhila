import React from "react";
import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div class="content-footer">
        <ul class="social-media">
          <li class="socia">
            <a href="https://www.facebook.com/ouakhila.nanri/">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="socia">
            <a href="https://twitter.com/ouakhila">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>

          <li class="socia">
            <a href="https://www.youtube.com/c/OuakhilaTorou ">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="socia">
            <a href="https://www.linkedin.com/in/nanri-ouakhilatou-torou-656b4790/">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div class="bottom-notes">
          <p>copyright &copy;2023</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;

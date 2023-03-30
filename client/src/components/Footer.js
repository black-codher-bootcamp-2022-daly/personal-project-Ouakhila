import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
function Footer() {
  return (
    <div className="social-container">
      <div class="content-footer">
        <a
          href="https://www.youtube.com/channel/UCclYeDZ_GjrrJ5Tr9A96J7A"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/ouakhila.nanri"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://twitter.com/ouakhila?lang=en"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/ouakhila.tech/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div class="bottom-notes">
        <p>copyright &copy;2023</p>
      </div>
    </div>
  );
}
export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="no internet connections"
        />
      </div>
    </div>
  );
};

export default Footer;

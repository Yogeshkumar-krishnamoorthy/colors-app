import React from "react";
import "./Footer.css";

const Footer = ({ paletteName, emoji }) => {
  return (
    <div className="Palette-Footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </div>
  );
};

export default Footer;

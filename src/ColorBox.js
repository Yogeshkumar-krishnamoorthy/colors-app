import React from "react";
import "./ColorBox.css";

const ColorBox = ({ color, name }) => {
  return (
    <div className="ColorBox" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>More</span>
    </div>
  );
};

export default ColorBox;

import React from "react";
import "./ColorBox.css";

const ColorBox = ({ color, name }) => {
  return (
    <div className="ColorBox" style={{ backgroundColor: color }}>
      <div className="Copy-Container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">copy</button>
        <span className="see-more">more</span>
      </div>
    </div>
  );
};

export default ColorBox;

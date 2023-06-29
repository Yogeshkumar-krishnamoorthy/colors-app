import React from "react";
import "./ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";

const ColorBox = ({ color, name }) => {
  return (
    <CopyToClipboard text={color}>
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div className="Copy-Container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">copy</button>
          <span className="see-more">more</span>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

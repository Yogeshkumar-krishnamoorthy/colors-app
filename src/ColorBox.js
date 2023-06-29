import React, { useState } from "react";
import "./ColorBox.css";
import CopyToClipboard from "react-copy-to-clipboard";

const ColorBox = ({ color, name }) => {
  const [copying, setCopying] = useState(false);

  const handleCopy = () => {
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 1500);
  };
  return (
    <CopyToClipboard text={color} onCopy={handleCopy}>
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div
          className={copying ? "copy-overlay show" : "cop-overlay"}
          style={{ backgroundColor: color }}
        />
        <div className={copying ? "copy-message show" : "copy-message"}>
          <h2>Copied!</h2>
          <p>{color}</p>
        </div>
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

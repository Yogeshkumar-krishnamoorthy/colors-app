import React, { useState } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import "./ColorBox.css";

const ColorBox = ({ paletteId, id, color, name }) => {
  const [copying, setCopying] = useState(false);

  const handleCopy = () => {
    setCopying(true);
    setTimeout(() => {
      setCopying(false);
    }, 1500);
  };

  const handlePropogation = (e) => {
    e.stopPropagation();
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
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={handlePropogation}
            className="see-more"
          >
            more
          </Link>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

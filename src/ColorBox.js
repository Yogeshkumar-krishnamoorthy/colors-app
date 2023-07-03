import React, { useState } from "react";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

const ColorBox = ({ paletteId, id, color, name, more = false }) => {
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

  const isDark = chroma(color).luminance() <= 0.2;
  const isLight = chroma(color).luminance() >= 0.5;
  return (
    <CopyToClipboard text={color} onCopy={handleCopy}>
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div
          className={copying ? "copy-overlay show" : "cop-overlay"}
          style={{ backgroundColor: color }}
        />
        <div className={copying ? "copy-message show" : "copy-message"}>
          <h2>Copied!</h2>
          <p className={isLight && "dark-text"}>{color}</p>
        </div>
        <div className="Copy-Container">
          <div className="box-content">
            <span className={isDark && "light-text"}>{name}</span>
          </div>
          <button className={isLight ? "copy-button dark-text" : "copy-button"}>
            copy
          </button>
          {more && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={handlePropogation}
              className={isLight ? "see-more dark-text" : "see-more"}
            >
              more
            </Link>
          )}
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;

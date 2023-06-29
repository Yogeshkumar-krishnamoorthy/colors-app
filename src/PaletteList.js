import React from "react";
import { Link } from "react-router-dom";

const PaletteList = ({ palette }) => {
  return (
    <div className="PaletteList">
      <h1 style={{ textAlign: "center" }}>React Palette</h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {palette.map((p) => (
          <Link
            style={{ width: "30%", textAlign: "center" }}
            to={`/palette/${p.id}`}
          >
            {p.paletteName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaletteList;

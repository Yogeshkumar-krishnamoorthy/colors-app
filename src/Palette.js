import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css"

const Palette = ({ colors }) => {
  return (
    <div className="Palette">
      {/* Navbar goes here */}
      <div className="Palette-Colors">
        {colors?.map((c) => (
          <ColorBox color={c.color} name={c.name} />
        ))}
      </div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;

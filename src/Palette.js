import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

const Palette = ({ colors }) => {
  const [level, setLevel] = useState(500);

  const handleLevel = (level) => {
    setLevel(level);
  };
  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={handleLevel} />
      <div className="Palette-Colors">
        {colors[level]?.map((c) => (
          <ColorBox color={c.hex} name={c.name} />
        ))}
      </div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;

import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

const Palette = ({ colors }) => {
  const [level, setLevel] = useState(500);

  const handleLevel = (level) => {
    setLevel(level);
  };
  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        step={100}
        min={100}
        max={900}
        onChange={handleLevel}
      />
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

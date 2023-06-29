import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

const Palette = ({ colors }) => {
  const [data, setData] = useState({ level: 500, format: "hex" });
  //   const [level, setLevel] = useState(500);

  const handleLevel = (level) => {
    setData({ ...data, level: level });
  };

  const handleFormat = (e) => {
    setData({ ...data, format: e.target.value });
  };

  return (
    <div className="Palette">
      <Navbar
        level={data.level}
        changeLevel={handleLevel}
        format={data.format}
        changeFormat={handleFormat}
      />
      <div className="Palette-Colors">
        {colors[data.level]?.map((c) => (
          <ColorBox color={c[data.format]} name={c.name} />
        ))}
      </div>
      {/* Footer goes here */}
    </div>
  );
};

export default Palette;

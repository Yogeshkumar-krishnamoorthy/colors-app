import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { getPalette } from "./ColorHelpers";
import SnackBar from "./SnackBar";
import Footer from "./Footer";
import "./Palette.css";

const Palette = ({ seedColors }) => {
  const [data, setData] = useState({ level: 500, format: "hex", open: false });

  const { id } = useParams();

  const { colors, paletteName, emoji } = getPalette(
    seedColors.find((c) => c?.id === id)
  );

  const handleLevel = (level) => {
    setData({ ...data, level: level });
  };

  const handleFormat = (e) => {
    setData({ ...data, format: e.target.value, open: true });
  };

  const handleClose = () => {
    setData({ ...data, open: false });
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
          <ColorBox
            key={c.id}
            paletteId={id}
            id={c.id}
            color={c[data.format]}
            name={c.name}
            more={true}
          />
        ))}
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
      <SnackBar
        open={data.open}
        handleClose={handleClose}
        format={data.format}
      />
    </div>
  );
};

export default Palette;

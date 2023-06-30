import React from "react";
import MiniPalette from "./MiniPalette";
import { styled } from "@mui/system";

const PalettesContainer = styled("div", {
  name: "palettes",
  slot: "container",
})({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 10,
  "& > *": {
    width: "280px",
    padding: "10px",
  },
});

const PaletteList = ({ palette }) => {
  return (
    <div className="PaletteList">
      <h1 style={{ textAlign: "center" }}>React Palette</h1>
      <PalettesContainer>
        {palette.map((p) => (
          <MiniPalette {...p} />
        ))}
      </PalettesContainer>
    </div>
  );
};

export default PaletteList;

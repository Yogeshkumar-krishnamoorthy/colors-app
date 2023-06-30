import React from "react";
import MiniPalette from "./MiniPalette";
import { styled } from "@mui/system";

const PalettesList = styled("div", {
  name: "palettes",
  slot: "list",
})({
  minHeight: "100vh",
  padding: 20,
  backgroundColor: "blue",
});

const PalettesListHeader = styled("h1", {
  name: "palettes-list",
  slot: "header",
})({
  maxWidth: 700,
  color: "#000",
  fontSize: "1.5rem",
  fontWeight: "600",
  textAlign: "center",
  padding: "10px 0",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

const PalettesContainer = styled("div", {
  name: "palettes",
  slot: "container",
})({
  maxWidth: 700,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 20,
});

const PaletteList = ({ palette }) => {
  return (
    <PalettesList>
      <PalettesListHeader>React Palette</PalettesListHeader>
      <PalettesContainer>
        {palette.map((p) => (
          <MiniPalette {...p} />
        ))}
      </PalettesContainer>
    </PalettesList>
  );
};

export default PaletteList;

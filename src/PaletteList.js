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
  maxWidth: 900,
  color: "#000",
  fontSize: "2.5rem",
  fontWeight: "600",
  textAlign: "center",
  padding: 10,
  margin: "0 auto 1rem auto",
  display: "flex",
  justifyContent: "space-between",
});

const PalettesContainer = styled("div", {
  name: "palettes",
  slot: "container",
})({
  maxWidth: 900,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 10,
  "& > *": {
    width: 280,
    padding: 10,
  },
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

import React from "react";
import MiniPalette from "./MiniPalette";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const PalettesList = styled("div", {
  name: "palettes",
  slot: "list",
})({
  minHeight: "100vh",
  padding: 20,
  backgroundColor: "blue",
});

const PalettesListHeader = styled("div", {
  name: "palettes-list",
  slot: "header",
})({
  maxWidth: 700,
  color: "#fff",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "600",
  padding: "10px 0",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& h1": {
    margin: 0,
    fontSize: "inherit",
    fontWeight: "inherit",
    cursor: "default",
  },
  "& a": {
    textDecoration: "none",
    color: "inherit",
    fontSize: "80%",
    fontWeight: "inherit",
  },
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
      <PalettesListHeader>
        <h1>React Colors</h1>
        <Link to="/palette/new">Create Palette</Link>
      </PalettesListHeader>
      <PalettesContainer>
        {palette.map((p) => (
          <MiniPalette key={p.id} {...p} />
        ))}
      </PalettesContainer>
    </PalettesList>
  );
};

export default PaletteList;

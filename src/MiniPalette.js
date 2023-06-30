import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledMiniPalette = styled("div", {
  name: "mini",
  slot: "palette",
})({});

const StyledLink = styled(Link, {
  name: "mini-palette",
  slot: "link",
})({
  width: "100%",
  height: "100%",
  textDecoration: "none",
  color: "#000",
});

const PaletteTitle = styled("div", {
  name: "mini-palette",
  slot: "title",
})({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: 10,
});

const MiniPalette = ({ paletteName, id, emoji, colors }) => {
  return (
    <StyledMiniPalette>
      <StyledLink to={`/palette/${id}`}>
        <div>
          {colors.map((c) => (
            <div style={{ backgroundColor: c.color }} />
          ))}
        </div>
        <PaletteTitle>
          <span>{paletteName}</span>
          <span>{emoji}</span>
        </PaletteTitle>
      </StyledLink>
    </StyledMiniPalette>
  );
};

export default MiniPalette;

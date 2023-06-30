import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledMiniPalette = styled("div", {
  name: "mini",
  slot: "palette",
})({
  position: "relative",
  width: 200,
  padding: 5,
  backgroundColor: "#fff",
  borderRadius: 5,
});

const StyledLink = styled(Link, {
  name: "mini-palette",
  slot: "link",
})({
  width: "100%",
  height: "100%",
  textDecoration: "none",
  color: "#000",
});

const MiniColorBoxContainer = styled("div", {
  name: "mini",
  slot: "color-box-container",
})({
  width: "100%",
  height: 120,
  display: "flex",
  flexWrap: "wrap",
  borderRadius: 5,
  overflow: "hidden",
  boxShadow: "0px 0px 2px 2px #00000020",
});

const MiniColorBox = styled("div", {
  name: "mini",
  slot: "color-box",
})({
  width: "20%",
  height: "25%",
});

const PaletteFooter = styled("div", {
  name: "mini-palette",
  slot: "footer",
})({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: 10,
  padding: "2px 0",
});

const PaletteTitle = styled("span", {
  name: "mini-palette",
  slot: "title",
})({
  fontSize: 10,
  fontWeight: "700",
});

const MiniPalette = ({ paletteName, id, emoji, colors }) => {
  return (
    <StyledMiniPalette>
      <StyledLink to={`/palette/${id}`}>
        <MiniColorBoxContainer>
          {colors.map((c) => (
            <MiniColorBox key={c.name} style={{ backgroundColor: c.color }} />
          ))}
        </MiniColorBoxContainer>
        <PaletteFooter>
          <PaletteTitle>{paletteName}</PaletteTitle>
          <span>{emoji}</span>
        </PaletteFooter>
      </StyledLink>
    </StyledMiniPalette>
  );
};

export default MiniPalette;

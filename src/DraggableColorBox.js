import React from "react";
import { styled } from "@mui/material/styles";

const Root = styled("div", {
  name: "draggable",
  slot: "colorbox",
})({
  position: "relative",
});

const ColorBoxInner = styled("div", {
  name: "colorbox",
  slot: "container",
})({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const DraggableColorBox = ({ name, color }) => {
  return (
    <Root style={{ backgroundColor: color }}>
      <ColorBoxInner>
        <h6>{name}</h6>
      </ColorBoxInner>
    </Root>
  );
};

export default DraggableColorBox;

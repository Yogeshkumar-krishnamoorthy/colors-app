import React from "react";
import { styled } from "@mui/system";

const StyledMiniPalette = styled("div", {
  name: "mini",
  slot: "palette",
})({
  backgroundColor: "purple",
  border: "3px solid teal",
  transition: "all 1s ease-in-out",
  "&:hover": {
    backgroundColor: "blue",
    borderColor: "blue",
  },
  "& h2": {
    color: "white",
  },
});
const MiniPalette = () => {
  return (
    <StyledMiniPalette>
      <h2>Mini Palette</h2>
    </StyledMiniPalette>
  );
};

export default MiniPalette;

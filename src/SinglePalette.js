import React, { useEffect, useState } from "react";
import ColorBox from "./ColorBox";
import { styled } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import { getPalette, getShades } from "./ColorHelpers";
import Navbar from "./Navbar";
import SnackBar from "./SnackBar";
import Footer from "./Footer";

const Main = styled("div", {
  name: "single",
  slot: "palette",
})({
  height: "100vh",
});

const ShadesHolder = styled("div", {
  name: "shades",
  slot: "holder",
})({
  height: "90vh",
});

const ShadesColorBox = styled(ColorBox, {
  name: "shades",
  slot: "color-box",
})({
  height: "50% !important",
});

const PreviousPage = styled("div", {
  name: "shades",
  slot: "color-box",
})({
  display: "inline-block",
  width: "20%",
  height: "50%",
  backgroundColor: "#000",
  marginBottom: "-4px",
  position: "relative",
});

const BackButton = styled(Link, {
  name: "shades",
  slot: "go-back",
})({
  width: 100,
  height: 30,
  position: "absolute",
  inset: "50% auto auto 50%",
  margin: "-15px auto auto -50px",
  color: "#fff",
  textDecoration: "none",
  textTransform: "uppercase",
  outline: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});

const SinglePalette = ({ seedColors }) => {
  const [data, setData] = useState({ format: "hex", shades: [], open: false });
  const { paletteId, colorId } = useParams();

  const { colors, paletteName, emoji } = getPalette(
    seedColors.find((c) => c?.id === paletteId)
  );

  const handleFormat = (e) => {
    setData({ ...data, format: e.target.value, open: true });
  };

  const handleClose = () => {
    setData({ ...data, open: false });
  };

  useEffect(() => {
    const shades = getShades(colors, colorId);
    setData({ ...data, shades: shades });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <Navbar format={data.format} changeFormat={handleFormat} />
      <ShadesHolder className="SinglePlatte">
        {data.shades.map((c) => (
          <ShadesColorBox
            key={c.name}
            paletteId={paletteId}
            id={c.id}
            color={c[data.format]}
            name={c.name}
          />
        ))}
        <PreviousPage>
          <BackButton to={`/palette/${paletteId}`}>Go Back</BackButton>
        </PreviousPage>
      </ShadesHolder>
      <Footer paletteName={paletteName} emoji={emoji} />
      <SnackBar
        open={data.open}
        handleClose={handleClose}
        format={data.format}
      />
    </Main>
  );
};

export default SinglePalette;

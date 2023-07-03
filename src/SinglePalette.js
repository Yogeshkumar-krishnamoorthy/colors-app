import React, { useEffect, useState } from "react";
import ColorBox from "./ColorBox";
import { styled } from "@mui/system";
import { useParams } from "react-router-dom";
import { getPalette, getShades } from "./ColorHelpers";
import Navbar from "./Navbar";

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
  height: "95vh",
});

const ShadesColorBox = styled(ColorBox, {
  name: "shades",
  slot: "color-box",
})({
  height: "50% !important",
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

  useEffect(() => {
    const shades = getShades(colors, colorId);
    setData({ ...data, shades: shades });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <Navbar format={data.format} changeFormat={handleFormat} />
      <ShadesHolder>
        {data.shades.map((c) => (
          <ShadesColorBox
            key={c.id}
            paletteId={paletteId}
            id={c.id}
            color={c[data.format]}
            name={c.name}
          />
        ))}
      </ShadesHolder>
    </Main>
  );
};

export default SinglePalette;

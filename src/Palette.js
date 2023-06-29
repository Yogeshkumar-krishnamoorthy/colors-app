import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { getPalette } from "./ColorHelpers";
import "./Palette.css";

const Palette = ({ seedColors }) => {
  const [data, setData] = useState({ level: 500, format: "hex", open: false });

  const { id } = useParams();

  const { colors, paletteName, emoji } = getPalette(
    seedColors.find((c) => c?.id === id)
  );

  const handleLevel = (level) => {
    setData({ ...data, level: level });
  };

  const handleFormat = (e) => {
    setData({ ...data, format: e.target.value, open: true });
  };

  const handleClose = () => {
    setData({ ...data, open: false });
  };

  return (
    <div className="Palette">
      <Navbar
        level={data.level}
        changeLevel={handleLevel}
        format={data.format}
        changeFormat={handleFormat}
      />
      <div className="Palette-Colors">
        {colors[data.level]?.map((c) => (
          <ColorBox key={c.id} color={c[data.format]} name={c.name} />
        ))}
      </div>
      <div className="Palette-Footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </div>
      <Snackbar
        open={data.open}
        onClose={handleClose}
        autoHideDuration={1000}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        message={<span id="message-id">Format Changed To : {data.format}</span>}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        action={[
          <IconButton
            onClick={handleClose}
            color="#fff"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default Palette;

import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./Palette.css";

const Palette = ({ colors }) => {
  const [data, setData] = useState({ level: 500, format: "hex", open: false });
  //   const [level, setLevel] = useState(500);

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
          <ColorBox color={c[data.format]} name={c.name} />
        ))}
      </div>
      {/* Footer goes here */}
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

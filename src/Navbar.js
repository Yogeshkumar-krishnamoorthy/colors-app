import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({ level, changeLevel, format, changeFormat }) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <a href="/">reactcolorpicker</a>
      </div>
      <div className="slder-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            step={100}
            min={100}
            max={900}
            onChange={changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={changeFormat}>
          <MenuItem value="hex"> Hex - #ffffff</MenuItem>
          <MenuItem value="rgb"> rgb - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba"> rgba - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({
  level = false,
  changeLevel = false,
  format,
  changeFormat,
}) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {level && (
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
      )}

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

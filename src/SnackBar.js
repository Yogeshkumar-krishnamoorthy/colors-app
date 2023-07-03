import React from "react";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const CustomSnackBar = ({ open, handleClose, format }) => {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={1000}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      message={<span id="message-id">Format Changed To : {format}</span>}
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
  );
};

export default CustomSnackBar;

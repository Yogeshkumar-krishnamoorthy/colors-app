import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChromePicker } from "react-color";
import DraggableColorBox from "./DraggableColorBox";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      padding: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  boxShadow: "none",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    boxShadow: "none",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ColorBox = styled("div", {
  name: "colorbox",
  slot: "container",
})({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(5,minmax(50px, 1fr))",
  gridAutoRows: 170,
});

const NewPaletteForm = () => {
  const theme = useTheme();

  const [data, setData] = useState({
    open: true,
    curColor: "",
    palette: [],
    newName: "",
  });

  const handleDrawerOpen = () => {
    setData({ ...data, open: true });
  };

  const handleDrawerClose = () => {
    setData({ ...data, open: false });
  };

  const handleColor = (color) => {
    setData({ ...data, curColor: color.hex });
  };

  const addColor = () => {
    if (data.curColor !== "") {
      let newColor = { color: data.curColor, name: data.newName };
      setData({ ...data, curColor: "", palette: [...data.palette, newColor] });
    }
  };

  ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
    return data.palette.length > 0
      ? data.palette.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      : true;
  });

  ValidatorForm.addValidationRule("isColor", (value) => {
    return data.curColor !== "";
  });

  ValidatorForm.addValidationRule("isColorUnique", (value) => {
    return data.palette.length > 0
      ? data.palette.every(
          ({ color }) => color.toLowerCase() !== data.curColor.toLowerCase()
        )
      : true;
  });

  const handleChange = (e) => {
    setData({ ...data, newName: e.target.value });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={data.open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(data.open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={data.open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design your palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker color={data.curColor} onChangeComplete={handleColor} />
        <ValidatorForm onSubmit={addColor}>
          <TextValidator
            value={data.newName}
            onChange={handleChange}
            validators={[
              "required",
              "isColor",
              "isColorNameUnique",
              "isColorUnique",
            ]}
            errorMessages={[
              "color name required",
              "color required",
              "color name taken",
              "color taken",
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ backgroundColor: data.curColor }}
            disabled={data.palette.length >= 20}
          >
            {data.palette.length >= 20 ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </Drawer>
      <Main open={data.open}>
        <DrawerHeader />
        <ColorBox>
          {data.palette.map((c) => (
            <DraggableColorBox name={c.name} color={c.color} />
          ))}
        </ColorBox>
      </Main>
    </Box>
  );
};

export default NewPaletteForm;

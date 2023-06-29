import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { getPalette } from "./ColorHelpers";
import "./App.css";

function App() {
  console.log(getPalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...getPalette(seedColors[4])} />
    </div>
  );
}

export default App;

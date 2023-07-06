import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import SinglePalette from "./SinglePalette";
import NewPaletteForm from "./NewPaletteForm";
import "./App.css";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route exact path="/" element={<PaletteList palette={seedColors} />} />
        <Route exact path="/palette" element={<h1>create palette</h1>} />
        <Route exact path="/palette/new" element={<NewPaletteForm />} />
        <Route
          exact
          path="/palette/:id"
          element={<Palette seedColors={seedColors} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<SinglePalette seedColors={seedColors} />}
        />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={Router} />
      {/* <Palette {...getPalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;

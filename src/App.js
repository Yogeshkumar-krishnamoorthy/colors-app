import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import "./App.css";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/palette" element={<h1>create palette</h1>} />
        <Route
          exact
          path="/palette/:id"
          element={<Palette seedColors={seedColors} />}
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

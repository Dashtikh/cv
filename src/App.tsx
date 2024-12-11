import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Ass from "./pages/projects/Analyzing Store Sales/ass";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
        <Routes>
          <Route
            index
            element={
              <Home />
            }
          />
          <Route
            path="AnalyzingStoreSales"
            element={
              <Ass />
            }
          />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;

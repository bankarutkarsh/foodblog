import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home"
import Details from "./components/Details"
import Recipe from "./components/Recipe"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element = { <Details />} />
          <Route path="/Recipe/:id" element = { <Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

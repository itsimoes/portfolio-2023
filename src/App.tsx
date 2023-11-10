import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
    </>
  );
}

export default App;

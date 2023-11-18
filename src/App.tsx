import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projetos />
      <Sobre />
    </>
  );
}

export default App;

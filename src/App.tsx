import React from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projetos />
      <Sobre />
      <Contact />
    </>
  );
}

export default App;

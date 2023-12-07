import React from "react";
import "./style.scss";
import Carousel from "./Carousel";
import LandingPages from "./LandingPages";

const Projetos = () => {
  return (
    <div className="projetos_wrapper">
      <div className="projetos_lp_title">Projetos</div>
      <Carousel />
      <div id="projetos_lp_title_2" className="projetos_lp_title">
        Landing Pages
      </div>
      <LandingPages />
    </div>
  );
};

export default Projetos;

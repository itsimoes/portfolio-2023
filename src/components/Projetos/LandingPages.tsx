import React from "react";

//images
import tech1080p from "../../assets/lp_tech1080p.png";
import blog1080p from "../../assets/lp_blog1080p.png";
import nontendo1080p from "../../assets/lp_nontendo1080p.png";
import pokedex1080p from "../../assets/lp_pokedex1080p.png";
import timer1080p from "../../assets/lp_timer.png";

const LandingPages = () => {
  return (
    <>
      <div className="projetos_lp_cards_container">
        <a href="https://itsimoes.github.io/LP-tech-product/"  rel="noreferrer" target="_blank"> <img className="projetos_lp_card" src={tech1080p} alt="" /></a>
        <a href="https://itsimoes.github.io/LP-nontendo-swotch/" rel="noreferrer" target="_blank"> <img className="projetos_lp_card" src={nontendo1080p} alt="" /></a>
        <a href="https://itsimoes.github.io/LP-blog-soon/" rel="noreferrer" target="_blank"> <img className="projetos_lp_card" src={blog1080p} alt="" /></a>
        <a href="https://itsimoes.github.io/pokedex/" rel="noreferrer" target="_blank"> <img className="projetos_lp_card" src={pokedex1080p} alt="" /></a>        
        <div id="projetos_lp_card_5"> <img className="projetos_lp_card_construction" src={timer1080p} alt="" /></div>        
      </div>
    </>
  );
};

export default LandingPages;

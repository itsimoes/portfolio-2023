import React from "react";

//images
import barros1080p from "../../assets/barros1080p.png";

const LandingPages = () => {
  return (
    <>
      <div className="projetos_lp_cards_container">
        <img className="projetos_lp_card" src={barros1080p} alt="" />
        <img className="projetos_lp_card" src={barros1080p} alt="" />
        <img className="projetos_lp_card" src={barros1080p} alt="" />
        <img className="projetos_lp_card" src={barros1080p} alt="" />
        <img className="projetos_lp_card" src={barros1080p} alt="" />
      </div>
    </>
  );
};

export default LandingPages;

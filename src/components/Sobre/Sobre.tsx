import React from "react";
import "./style.scss";

const Sobre = () => {
  return (
    <div id="sobre" className="sobre_wrapper">
      <h2>Sobre mim</h2>
      <div className="sobre_image_container">
        <div className="sobre_image_card" />
      </div>
      <br />
      <div className="sobre_text">
        <h3>
          Natural do estado do Maranhão, graduado pela Universidade Federal do
          Maranhão (UFMA) no curso de Ciência da Computação, venho atuando no
          desenvolvimento web Front-end desde 2021.
        </h3>
        <h3>
          Utilizando como principais tecnologias <b>React</b>, <b>Angular</b>,{" "}
          <b>Javascript</b>, <b>Typescript</b>, além de <b>HTML5</b> e{" "}
          <b>CSS3</b>, venho desenvolvendo aplicações Web com foco em
          acessibilidade, praticidade e usabilidade para que todos os usuários
          possam ser incluídos e consigam utilizar as aplicações de acordo com
          sua necessidade.
        </h3>
        <h3>
          Busco sempre eficiência e simplicidade na criação de projetos para que
          sua utilização seja intuitiva, eficaz e prazerosa por parte dos
          usuários.
        </h3>
      </div>
    </div>
  );
};

export default Sobre;

import React from "react";
import "./style.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="navbar_container">
        <h4 className="navbar_title">Ítalo Simões</h4>
        <Link to="sobre" smooth spy hashSpy>
          <button className="navbar_about draw">
            <h4>Sobre</h4>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./style.scss";

//icons
import { ReactComponent as GithubIcon } from "../../assets/github_icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram_icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin_icon.svg";

const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="home_avatar_wrapper">
        <button className="spin circle">
          <div className="home_avatar" />
        </button>
      </div>
      <div className="home_title_wrapper">
        <h1>
          <span>Olá,</span> sou Ítalo Simões.
        </h1>
        <h3>Desenvolvedor Web</h3>
        <h4>
          Precisa de ajuda com seu projeto? <a><button className="home_contact_link_container draw"><h4>Vamos conversar.</h4></button></a>
        </h4>
      </div>
      <div className="home_link_wrapper">
        <a href="https://github.com/itsimoes" rel="noreferrer" target="_blank">
          <button className="home_social_media_icon_container draw">
            <div>
              <GithubIcon />
            </div>
          </button>
        </a>
        <a href=" " rel="noreferrer" target="_blank">
          <button className="home_social_media_icon_container draw">
            <div>
              <InstagramIcon />
            </div>
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/itsimoes/"          
          rel="noreferrer"
          target="_blank"
        >
          <button className="home_social_media_icon_container draw">
            <div>
              <LinkedinIcon />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

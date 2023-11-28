import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import barrosMobile from "../../assets/barrosMobile.png";
import disctionaryMobile from "../../assets/dictionaryMobile.png";
import nsadvocaciaMobile from "../../assets/nsadvocaciaMobile.png";

//icons
import { ReactComponent as GithubIcon } from "../../assets/github_icon.svg";
import { ReactComponent as WWWIcon } from "../../assets/www_icon.svg";

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_1" className="projetos_carousel_card">
          <div className="projetos_carousel_card_button_wrapper">
            <a
              href="https://barrosconsultoriaeconcessoes.com/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="projetos_carousel_card_button draw">
                <WWWIcon />
              </button>
            </a>
          </div>
          <div className="projetos_carousel_image_wrapper">
            <img
              src={barrosMobile}
              className="projetos_carousel_card_mobile"
              alt=""
            />
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_2" className="projetos_carousel_card">
          <div className="projetos_carousel_card_button_wrapper">
          <a
              href="https://github.com/itsimoes/ns-advocacia"
              rel="noreferrer"
              target="_blank"
            >
              <button className="projetos_carousel_card_button draw">
                <GithubIcon />
              </button>
            </a>
            <a
              href="https://itsimoes.github.io/ns-advocacia/"
              rel="noreferrer"
              target="_blank"
            >
              <button className="projetos_carousel_card_button draw">
                <WWWIcon />
              </button>
            </a>          
          </div>
          <div className="projetos_carousel_image_wrapper">
            <img
              src={nsadvocaciaMobile}
              className="projetos_carousel_card_mobile"
              alt=""
            />
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
       
         <div id="projetos_carousel_3" className="projetos_carousel_card">
         <div className="projetos_carousel_card_button_wrapper">
           <a
             href="https://github.com/itsimoes/free-dictionary"
             rel="noreferrer"
             target="_blank"
           >
             <button className="projetos_carousel_card_button draw">
               <GithubIcon />
             </button>
           </a>
           <a
             href="https://itsimoes.github.io/free-dictionary/"
             rel="noreferrer"
             target="_blank"
           >
             <button className="projetos_carousel_card_button draw">
               <WWWIcon />
             </button>
           </a>
         </div>
         <div className="projetos_carousel_image_wrapper">
           <img
             src={disctionaryMobile}
             className="projetos_carousel_card_mobile"
             alt=""
           />
         </div>
       </div>
      ),
    },    
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null,
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null,
        });
      }
    }
  };

  render() {
    return (
      <div
        style={{ width: "80%", height: "500px", margin: "0 auto" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          // showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

import React from "react";
import "./Hero.css";
import "../../utils.css";
import Profile from "../profile/Profile";
import About from "../about/About";
import Scroll from "../scroll/Scroll";

function Hero() {
  return (
    <div className='container hero__container'>
      <div className='hero__split'>
        <div className='hero__intro'>
          <h1 className='hero__title hey-scale'>Hey!</h1>
          <div
            className='name-scale'
            style={{ display: "flex", flexDirection: "row" }}>
            <h1 className='hero__title'>I&apos;m</h1>
            <h1 className='hero__title hero__name '> Miles</h1>
          </div>
          <div className='hero__specialty developer-slide'>
            <h1>A Web Developer</h1>
          </div>
          <div className='hero__extra passion-slide'>
            With a passion for UI/UX.
          </div>
        </div>
        <div className='hero__about name-scale'>
          <About />
        </div>
      </div>
    </div>
  );
}

export default Hero;

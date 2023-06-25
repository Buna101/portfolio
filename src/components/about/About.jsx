import React from "react";
import "./About.css";

import Profile from "../profile/Profile";
function About() {
  return (
    <div className='about__container'>
      <Profile />
      {/* <p className='about__text'>
        Some of my hobbies include: <br></br>rock climbing, pickleball, and
        photography.
      </p> */}
      {/* <p className='about__text'>Oh! and my favorite color is orange</p> */}
    </div>
  );
}

export default About;

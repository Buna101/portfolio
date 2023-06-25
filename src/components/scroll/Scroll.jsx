import React from "react";
import "./Scroll.css";
import arrow from "../../assets/down-arrow.svg";
function Scroll() {
  return (
    <div className='scroll__container'>
      <p className='scroll__text'>Scroll down to see more</p>
      <img src={arrow} className='scroll__arrow' />
    </div>
  );
}

export default Scroll;

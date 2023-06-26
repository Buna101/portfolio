import React, { useEffect, useRef } from "react";
import "./More.css";

import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import node from "../../assets/node2.svg";
import express from "../../assets/express.svg";
import mongo from "../../assets/mongodb.svg";
import me from "../../assets/me.png";

// import me from "../../assets/";

import PropTypes from "prop-types";

function More(props) {
  const { animation } = props;

  useEffect(() => {
    if (animation == true) {
      document.getElementById("techstack").classList.remove("more__techstack");
      document.getElementById("techstack").classList.add("techstack-scale");
    }
  });

  return (
    <div className='container more-scale more__container'>
      <div className='more__title' id='about'>
        // About
      </div>
      <div className='more__reverse'>
        <div className='more__info__container'>
          <div className='more__text'>
            <div className='more__paragraph'>
              <p className='more__paragraph__intro'>
                Hello there, I'm Miles!
                <br></br>A Web developer from St. Louis MO.
                <br></br>
              </p>
              <p
                className='more__paragraph__body'
                style={{ marginTop: "1rem" }}>
                Outside of tech you can find me rock climbing, playing
                pickleball, or honing my photography skills!
              </p>
            </div>
          </div>
        </div>
        <div className='more__image__container'>
          <img className='more__image' src={me} />
        </div>
      </div>
      <div id='techstack' className='more__techstack'>
        <div className='more__techstack__title'>Technologies</div>
        <ul className='more__techstack__container'>
          <ul className='more__techstack__list'>
            <li className='more__techstack__item'>
              <img className='more__techstack__image' src={js}></img>
              JavaScript
            </li>

            <li className='more__techstack__item'>
              <img className='more__techstack__image' src={node}></img>
              Node.js
            </li>
            <li className='more__techstack__item'>
              <img className='more__techstack__image' src={express}></img>
              Express
            </li>
          </ul>
          <ul className='more__techstack__list'>
            <li className='more__techstack__item'>
              <img className='more__techstack__image' src={react}></img>
              React / React Native
            </li>
            <li className='more__techstack__item'>
              <img
                className='more__techstack__image'
                style={{ marginRight: "0.5rem" }}
                src={mongo}></img>
              MongoDB
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default More;

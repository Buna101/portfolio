import React from "react";
import "./Work.css";
import react from "../../assets/react.svg";

function Work() {
  return (
    <div id='work' className='container section work-scale work__top'>
      <div className='work__title'>// Work</div>
      <div className='work__container'>
        <div className='card card1-scale'>
          <div className='content'>
            <h2 className='heading'>LFG Poker</h2>
            <p className='para'>
              A mobile poker app. Create your own club and play poker with
              anyone anywhere!
            </p>
            <p className='tech'>Tech Stack</p>
            <div style={{ display: "flex" }}>
              <img src={react}></img>
              <img src={react}></img>
              <img src={react}></img>
            </div>
            <div style={{ display: "flex" }}>
              <a
                href='https://www.lfgpoker.app'
                target='_blank'
                className=''
                rel='noreferrer'>
                <button className='button'>Live</button>
              </a>

              <button style={{ opacity: 0 }} className='button'>
                Github
              </button>
            </div>
          </div>
        </div>
        {/* <div className='card card2-scale'>
          <div className='content'>
            <h2 className='heading'>Flop Factory</h2>
            <p className='para'>
              A poker training app to help improve your skills through problems
              and quizzes
            </p>
            <p className='tech'>Tech Stack</p>
            <div style={{ display: "flex" }}>
              <img src={react}></img>
              <img src={react}></img>
              <img src={react}></img>
            </div>
            <div style={{ display: "flex" }}>
              <button className='button'>Live</button>
              <button className='button'>Github</button>
            </div>
          </div>
        </div> */}
        {/* <div className='card card3-scale'>
          <div className='content'>
            <h2 className='heading'>Liliths Garten</h2>
            <p className='para'>
              An eCommerce website for a local jewelry company
            </p>
            <p className='tech'>Tech Stack</p>
            <div style={{ display: "flex" }}>
              <img src={react}></img>
              <img src={react}></img>
              <img src={react}></img>
            </div>
            <div style={{ display: "flex" }}>
              <button className='button'>Live</button>
              <button className='button'>Github</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Work;

import "./modern-normalize.css";
import "./index.css";
import "./utils.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Scroll from "./components/scroll/Scroll";
import Work from "./components/work/Work";
import Profile from "./components/profile/Profile";
import More from "./components/more/More";
import Contact from "./components/contact/Contact";

import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [techAnimation, setTechAnimation] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".more", {
      scrollTrigger: {
        trigger: ".more",
        toggleClass: "scroll-scale",
      },
      onComplete: () => {
        setTechAnimation(true);
      },
    });

    gsap.to(".work", {
      scrollTrigger: {
        trigger: ".work",
        toggleClass: "scroll-scale",
      },
    });

    gsap.to(".contact", {
      scrollTrigger: {
        trigger: ".contact",
        toggleClass: "scroll-scale",
      },
    });
  }, []);

  return (
    <>
      <div>
        <div className='header'>
          <Header></Header>
        </div>
        <div>
          <Hero></Hero>
        </div>
        <div className='more'>
          <More animation={techAnimation} />
        </div>
        <div className='work'>
          <Work />
        </div>
        <div className='contact'>{/* <Contact /> */}</div>
      </div>

      {/* <Scroll /> */}
    </>
  );
}

export default App;

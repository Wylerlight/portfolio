import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './TechStack.css'; // Assuming you have your styles defined here

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const container = containerRef.current;

    gsap.to('[data-speed]', {
      y: (i, el) =>
        (parseFloat(el.getAttribute('data-speed')) - 1) *
        ScrollTrigger.maxScroll(window),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: '-250% center',
        invalidateOnRefresh: true,
        scrub: 1.5,
        // markers: true,
      },
    });
  });

  return (
    <div className="tech-stack__container">
      <h1 className="box__title">Tech Stack</h1>
      <div ref={containerRef} className="box-container">
        <div className="box " data-speed="0.25">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </div>
        <div className="box " data-speed="0.4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </div>
        <div className="box " data-speed="0.75">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        </div>
        <div className="box " data-speed=".25">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        </div>
        <div className="box " data-speed="0.65">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        </div>
        <div className="box " data-speed="0.5">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
        </div>
        <div className="box " data-speed="0.35">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        </div>
        <div className="box " data-speed="0.85">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
        </div>
        <div className="box more" data-speed="0.45">
          ...AND MORE
        </div>
      </div>
    </div>
  );
};

export default TechStack;

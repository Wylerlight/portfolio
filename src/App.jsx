import './App.css';
import { useRef, useEffect, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/* Component Imports */
import TechStack from './TechStack/TechStack';
import Projects from './Projects/Projects';
import Form from './Form/Form';
// import SmoothScroll from './SmoothScroll/SmoothScroll';
import projectData from './utils/projectData';

/* Image imports */
import profilePicture from './assets/IMG_5585.jpg';
import linkedin from './assets/linkedin-logo.png';
import instagram from './assets/ig-logo.png';
import github from './assets/github-logo.png';
import arrowUp from './assets/up-arrow.svg';

gsap.registerPlugin(ScrollTrigger);

function App() {
  /*  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      direction: 'vertical', // Can be 'vertical' or 'horizontal'
      smooth: true, // Enable smooth scrolling
      smoothTouch: false, // Disable smooth touch scrolling
      touchMultiplier: 2, // Multiplier for touch scrolling
    });

    // Create a RAF loop to update Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []); */

  const lenis = new Lenis({
    duration: 2,
  });
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const [formIsOpen, setFormIsOpen] = useState(false);
  const handleOpenCloseForm = () => {
    console.log('open form');
    setFormIsOpen(!formIsOpen);
  };

  return (
    <>
      <div id="top" className="navbar">
        <div className="navbar__title">
          <div className="neon-container">
            <h1 className="neon-heading" spellCheck="false">
              open to work
            </h1>
          </div>
        </div>
        <ul className="navbar__list">
          <li className="navbar__selection-li">
            <a className="navbar__selections" href="#home">
              Home
            </a>
          </li>
          <li className="navbar__selection-li">
            <a className="navbar__selections" href="#about">
              About
            </a>
          </li>
          <li className="navbar__selection-li">
            <a className="navbar__selections" href="#projects">
              Projects
            </a>
          </li>
          <li className="navbar__selection-li">
            <a className="navbar__selections" href="#contact">
              Socials
            </a>
          </li>
        </ul>
      </div>
      {formIsOpen && <Form handleOpenCloseForm={handleOpenCloseForm} />}
      <main className="main">
        <section className="business__card-section">
          <div className="business__card-profile">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="business__card-image"
            />
          </div>
          <div className="business__card-about-title">
            <h1 className="custom-heading">Tyler Tellez</h1>
          </div>
          <div className="business__card-about">
            <p className="business__card-about-description">
              I'm a full-stack developer who is passionate about writing code
              and constantly seeking opportunities to improve my skills. I find
              joy in solving complex problems and am always eager to learn new
              technologies. My dedication and enthusiasm make me a valuable
              asset to any development team.
            </p>
            <h2 className="business__card-about-role">Current Role:</h2>
            <p className="business__card-about-description">
              Esri - Customer Service Representative
            </p>
            <div className="business__card-contact">
              <button
                className="business__card-contact-button"
                onClick={handleOpenCloseForm}
              >
                Contact Me
              </button>
              <a href="#projects" className="business__card-contact-direct">
                View Projects
              </a>
            </div>
          </div>
        </section>

        <TechStack />
        <section className="projects__section">
          <h1 className="projects__title">PROJECTS</h1>

          <div className="projects-wrapper">
            {projectData.map((projectData, index) => {
              return <Projects key={index} projectData={projectData} />;
            })}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about__section">
            <div className="about__title">
              <h1 className="about__title-text">ABOUT ME</h1>
            </div>
            <div className="about__description">
              <p>
                Welcome to my page. when I'm not working on projects at home,
                I'm working out my my local CrossFit gym, watching my favorite
                anime, or watching a crazy reality show. I studied Japanese
                日本語 for a brief time and have a fundamental grasp of the
                language.. for now!
              </p>
              <p>
                If you'd like to get to know me more, check out my socials or
                contact me!
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="custom__project-sign">
            <h3>
              <p>Check me out across the internet</p>
              <div className="scroll-more">↓</div>
            </h3>
          </div>
          <div className="socials">
            <a
              className="social__links"
              href="https://www.instagram.com/tylerjtellez/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                id="instagram"
                className="social__icons"
              />
            </a>

            <a
              className="social__links"
              href="https://www.linkedin.com/in/tylerjtellez/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                id="linkedin"
                className="social__icons"
              />
            </a>
            <a
              className="social__links"
              href="https://github.com/Wylerlight"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                id="github"
                className="social__icons"
              />
            </a>
          </div>
        </section>
      </main>
      <footer id="footer" className="footer">
        <p className="footer__copyright">Copyright © Tyler Tellez 2024</p>
      </footer>

      {/* to top of page */}

      <>
        <a href="#top">
          <img
            src={arrowUp}
            alt="Top of Page"
            className="bg-white rounded-full p-2 fixed w-20 bottom-10 right-10"
          />
        </a>
      </>
    </>
  );
}

export default App;

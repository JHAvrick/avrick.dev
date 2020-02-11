import React, {useState, useRef, useEffect} from 'react';
import 'normalize.css';
import './App.css';

import {
  BrowserRouter as Router,
  Redirect,
  useLocation
} from "react-router-dom";

import Header from './components/header/header';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import VisibilitySensor from 'react-visibility-sensor';

import Particles from 'react-particles-js';
//import ParticleConfig from './assets/particlesjs-config';

function App() {
  return (
    <div id="app" className="app">
      {/* <motion.img initial={{opacity: 0}} animate={{opacity:0.09}} transition={{duration: 1.5}} className="app__bg" src={BgAbstract}></motion.img> */}
      <Router>
        <Redirect to="/home" /> 
        <AppContainer />
      </Router>
    </div>
  );
}


function AppContainer(){
  /**
   * Wait a couple seconds before activating the visiblity sensor components
   */
  // const [sensorsActive, setSensorsActive] = useState(false);
  // useEffect(() => setTimeout(() => setSensorsActive(true), 5000), []);

  /**
   * The static header appears based on different triggers depending on whether the user is descending or ascending
   */
  const [headerCondensed, setHeaderCondensed] = useState(false);
  const handleHeaderVisible = (isVisible) => setHeaderCondensed(!isVisible);

  /**
   * Refs for use with scrollIntoView() when the page location changes
   */
  const homeSectionStartEl = useRef(null);
  const skillSectionStartEl = useRef(null);
  const projectsSectionStartEl = useRef(null);
  const contactSectionStartEl = useRef(null);

  let location = useLocation();
  useEffect(() => {
    switch (location.pathname){
      default: 
      case "/home":
        homeSectionStartEl.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "/skills":
        skillSectionStartEl.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "/projects":
        projectsSectionStartEl.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "/contact":
        contactSectionStartEl.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }, [location]);

  return(
    <div className="app-container">
      <Particles className="particles" style={{position: "absolute", top: 0, left: 0, height: "100%", opacity: 0.5}} />

      <div ref={homeSectionStartEl}></div>
      <VisibilitySensor delayedCall={true} onChange={handleHeaderVisible}>
        <Header condensed={headerCondensed} />
      </VisibilitySensor>
      <Home />

      <div ref={skillSectionStartEl} style={{ margin: "auto", width: "50%", height: "1px", background: "var(--fc-primary)"}}></div>
      <Skills />

      <div ref={projectsSectionStartEl} style={{ margin: "auto", width: "50%", height: "1px", background: "var(--fc-primary)"}}></div>
      <Projects />
      
      <div ref={contactSectionStartEl} style={{ margin: "auto", width: "50%", height: "1px", background: "var(--fc-primary)"}}></div>
      <Contact />
    </div>
  )

}



export default App;

import React, {useState, useRef, useEffect} from 'react';
import 'normalize.css';
import './app.css';

import {
  BrowserRouter as Router,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import { motion } from "framer-motion";

import BgAbstract from './assets/images/bg-abstract.png';

import Header from './components/header/header';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

import VisibilitySensor from 'react-visibility-sensor';

function App() {
  return (
    <div id="app" className="app">
      <motion.img initial={{opacity: 0}} animate={{opacity:0.09}} transition={{duration: 1.5}} className="app__bg" src={BgAbstract}></motion.img>
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
  const [sensorsActive, setSensorsActive] = useState(false);
  useEffect(() => setTimeout(() => setSensorsActive(true), 2000), []);

  /**
   * The static header appears based on different triggers depending on whether the user is descending or ascending
   */
  const [headerCondensed, setHeaderCondensed] = useState(false);
  const handleCondenseHeaderDescending = (isVisible) => !isVisible && !headerCondensed ? setHeaderCondensed(true) : null;
  const handleCondenseHeaderAcsending = (isVisible) => isVisible && headerCondensed ? setHeaderCondensed(false) : null;


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
      <div ref={homeSectionStartEl}></div>
      <Header condensed={headerCondensed} />
      <Home>
        <VisibilitySensor active={sensorsActive} delayedCall={true} onChange={handleCondenseHeaderAcsending}>
          <div style={{position: "absolute", top: "40%", width: "100%", height: "1px", background: "none"}}></div>
        </VisibilitySensor>
        <VisibilitySensor active={sensorsActive} delayedCall={true} onChange={handleCondenseHeaderDescending}>
          <div style={{position: "absolute", top: "99%", width: "100%", height: "1px", background: "none"}}></div>
        </VisibilitySensor>
      </Home>

      <div ref={skillSectionStartEl} style={{width: "100%", height: "1px", background: "none"}}></div>
      <Skills />

      <div ref={projectsSectionStartEl} style={{width: "100%", height: "1px", background: "none"}}></div>
      <Projects />

      <div ref={contactSectionStartEl} style={{width: "100%", height: "1px", background: "none"}}></div>
      <Contact />
    </div>
  )

}



export default App;

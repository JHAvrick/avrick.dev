import React from 'react';
import 'normalize.css';
import './app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';

import Variants from "./components/variants";



function Projects(){
  return (
    <motion.div className="about__content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  >
    I AM A Projects SECTION
  </motion.div>

  )
}
function Contact(){return (
  <motion.div className="about__content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  >
  I AM A Contact SECTION
</motion.div>

)}


function App() {


  function handleExit(){
    console.log("!!!");
  }

  return (

    <div id="app" className="app">
      
      <Router>
        <Header />
        <AnimatePresence exitBeforeEnter onExitComplete={handleExit}>
            <Switch location={window.location} key={window.location.pathname}>
              <Route exact path="/" component={About} key="about" />
              <Route exact path="/about" component={About} /> 
              <Route exact path="/skills" component={Skills} key="skills" />
              <Route exact path="/projects" component={Projects} key="projects" />
              <Route exact path="/contact" component={Contact} key="contact" />
            </Switch>
        </AnimatePresence>
      </Router>

    </div>
  );
}

export default App;

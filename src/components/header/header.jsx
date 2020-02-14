import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeaderVariants from './header-variants';
import './header.css';
import './header-condensed.css';

function Header(props) {
  const [isCondensed, setIsCondensed] = useState(props.condensed);
  useEffect(() => { setIsCondensed(props.condensed) }, [props.condensed])

  const homeLinkEl = useRef(null);
  const skillsLinkEl = useRef(null);
  const projectsLinkEl = useRef(null);
  const contactLinkEl = useRef(null);
  const refs = [
    { ref: homeLinkEl, posMin: 0, posMax: 0.5 },
    { ref: skillsLinkEl, posMin: 0.5, posMax: 1.5 },
    { ref: projectsLinkEl, posMin: 1.5, posMax: 2.5 },
    { ref: contactLinkEl, posMin: 2.5, posMax: 3.5 }
  ]
  
  const handleScroll = () => {
    let pos = document.getElementById("app").scrollTop / window.innerHeight;
    for (let i = 0; i < refs.length; i++){
      let item = refs[i];
      if (item.ref.current && pos > item.posMin && pos < item.posMax){
        item.ref.current.style.color = "var(--fc-blue)";
      } else if (item.ref.current)  {
        item.ref.current.style.color = "var(--fc-primary)";
      }
    }
  }

  useEffect(() => {
    if (isCondensed) document.getElementById("app").addEventListener("scroll", handleScroll);
    else document.getElementById("app").removeEventListener("scroll", handleScroll);
    
    return (() => {document.getElementById("app").removeEventListener("scroll", handleScroll)});
    
  }, [isCondensed])

  const HeaderCondensed = (
      <motion.header data-testid="header-condensed" className="header-condensed" variants={HeaderVariants.CondensedHeader.Item} initial="hidden" animate="show" exit={{ opacity: 0 }}>
        <motion.h1 variants={HeaderVariants.CondensedHeader.Item} className="header-condensed__h1" >JA</motion.h1>
        <motion.nav variants={HeaderVariants.CondensedHeader.Container} className="nav-vertical">
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> 
            <Link title="Visit About Section" to="/home"> <span ref={homeLinkEl}> Home </span> </Link> 
          </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> 
            <Link title="Visit About Section" to="/skills"> <span ref={skillsLinkEl}> Skills </span> </Link> 
          </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item">
            <Link title="Visit About Section" to="/projects"> <span ref={projectsLinkEl}> Projects </span> </Link> 
          </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> 
            <Link title="Visit About Section" to="/contact"> <span ref={contactLinkEl}> Contact </span> </Link> 
          </motion.li>
        </motion.nav>
      </motion.header>
  )

  return (
    <div>
      <motion.header data-testid="header" className="header" variants={HeaderVariants.DefaultHeader.Item} initial="hidden" animate="show" exit="hidden">
        <motion.h1 variants={HeaderVariants.DefaultHeader.Item} className="header__h1" >JOSHUA H. AVRICK</motion.h1>
        <motion.nav variants={HeaderVariants.DefaultHeader.Container} className="nav">
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/home"> Home </Link> </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/skills"> Skills </Link> </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/projects"> Projects </Link> </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/contact"> Contact </Link> </motion.li>
        </motion.nav>
        <motion.div variants={HeaderVariants.DefaultHeader.Item} className="header__border-bottom" ></motion.div>
      </motion.header>
      <AnimatePresence exitBeforeEnter>
        {isCondensed ? HeaderCondensed : ""}
      </AnimatePresence>
    </div>
  )
}

export default Header;

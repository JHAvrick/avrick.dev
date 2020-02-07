import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeaderVariants from './header-variants';
import './header.css';
import './header-condensed.css';

function Header(props) {
  const [isCondensed, setIsCondensed] = useState(props.condensed);
  useEffect(() => { console.log("C:" + props.condensed); setIsCondensed(props.condensed) }, [props.condensed])

  const HeaderCondensed = (
      <motion.header data-testid="header-condensed" className="header-condensed" variants={HeaderVariants.CondensedHeader.Item} initial="hidden" animate="show" exit={{ opacity: 0 }}>
        <motion.h1 variants={HeaderVariants.CondensedHeader.Item} className="header-condensed__h1" >JA</motion.h1>
        <motion.nav variants={HeaderVariants.CondensedHeader.Container} className="nav-vertical">
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/home"> Home </Link> </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/skills"> Skills </Link> </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/projects"> Projects </Link> </motion.li> 
          <motion.li variants={HeaderVariants.DefaultHeader.Item} className="nav__item"> <Link title="Visit About Section" to="/contact"> Contact </Link> </motion.li>
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

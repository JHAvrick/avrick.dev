import React, { useState } from 'react';
import './skills.css';
import Variants from "../variants";
import Tilt from 'react-tilt';
import { motion } from "framer-motion";
import Skillchart from '../skillchart/skillchart';

function Skills() {


    return (
      <section data-testid="skills" className="skills">
         <motion.div className="skills__content" initial="initial" animate="enter" exit="exit" variants={Variants.Page} transition={{duration: 1.5}} > 

         <hr className="about__border" style={{top: "-1px"}} />
          <div className="about__header-container">
              <h1 className="about__header">PROFICIENCIES</h1>
              {/* <h2 className="about__subheader"> Description </h2> */}
          </div>
          <hr className="about__border" style={{position: "initial"}} />
          
        <div className="skills__skill-section">
          <div style={{margin: "2rem 0"}}>
            <Tilt className="Tilt" options={{ max : 8, scale: 1.02 }} >
                <Skillchart /> 
            </Tilt>
          </div>


        
        </div>




        </motion.div> 
      </section>
  );
}

export default Skills;

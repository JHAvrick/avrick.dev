import React from 'react';
import Variants from "../variants";
import { motion } from "framer-motion";
import Baltimore from '../baltimore/baltimore';
import { useHistory } from "react-router-dom";
import './home.css';

function Home(props) {
    const history = useHistory();

    return (
        <motion.section className="home" initial="initial" animate="enter" exit="exit" variants={Variants.Page}>
            <div className="home__content">
                <div className="home__left">
                    <Baltimore />
                </div>

                <div className="home__right">
                    <p style={{marginTop: 0}}>

                        <span style={{color:"var(--fc-blue)", fontWeight: "bold"}}>Full-Stack Developer </span> 
                        with a focus on web design patterns and application development. 
                        Proficient in modern JavaScript, 
                        including familiarity with current <span style={{color:"var(--fc-blue)"}}>build/testing tools</span>, 
                        component-based <span style={{color:"var(--fc-blue)"}}> 
                        UI/UX libraries,</span> and design <span style={{color:"var(--fc-blue)"}}>best practices.</span> </p>

                        <p className="home__hide-sm"> 
                        <span style={{color:"var(--fc-blue)"}}>Actively seeking opportunities</span> where 
                            I can utilize and extend current skills to solve challenging and unique problems. </p>

                        <p> Most recently based in Baltimore, working as a <span style={{color:"var(--fc-blue)"}}>Front-End Developer</span>. </p>

                    <motion.button onClick={() => history.push("/skills")} className="button home__button" value="Learn More About Me" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}> 
                        Learn More About Me
                    </motion.button>
                </div>
            </div>
            {props.children}
        </motion.section>
    );
}

export default Home;

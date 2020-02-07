import React, { useState } from 'react';
import Variants from "../variants";
import { motion } from "framer-motion";
import Tilt from 'react-tilt';
import './projects.css';

function Projects(props) {

    const [selectedTab, setSelectedTab] = useState({ category: "apps", position: "0" });
    const handleTabSelected = (selected) => setSelectedTab(selected);

    return (
        <motion.section className="projects" initial="initial" animate="enter" exit="exit" variants={Variants.Page}>

            <div style={{display: "flex", justifyContent: "center", width: "100%", minHeight: "375px"}}>
                <div className="projects__tabs"> 
                    <span style={{ left: selectedTab.position }} className="projects__selection"></span>
                    <span onClick={ () => handleTabSelected({ category: "apps", position: "0" }) }  className="projects__tab"> Apps </span>
                    <span onClick={ () => handleTabSelected({ category: "libs", position: "33%" })} className="projects__tab"> Libraries </span>
                    <span onClick={ () => handleTabSelected({ category: "misc", position: "66%" })} className="projects__tab"> Misc </span>
                </div>
            </div>

            {props.children}
        </motion.section>
    );
}

function ProjectTabs() {

}

export default Projects;

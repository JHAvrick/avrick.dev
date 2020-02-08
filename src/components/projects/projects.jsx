import React, { useState } from 'react';
import BadgeCollection from './badge-collection';
import Variants from "../variants";
import { motion } from "framer-motion";
import Tilt from 'react-tilt';
import './projects.css';
import './project-card.css';

import KronokuPNG from '../../assets/images/kronoku.png';
import ReactLinkTabsPNG from '../../assets/images/reactlinktabs.png';

var lorum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "

function Projects(props) {

    const [selectedTab, setSelectedTab] = useState({ category: "apps", position: "0" });
    const handleTabSelected = (selected) => setSelectedTab(selected);

    return (
        <section className="projects">

            <div className="projects__tabs-container">
                <div className="projects__tabs"> 
                    <span style={{ left: selectedTab.position }} className="projects__selection"></span>
                    <span onClick={ () => handleTabSelected({ category: "apps", position: "0%" }) }  className="projects__tab"> Apps </span>
                    <span onClick={ () => handleTabSelected({ category: "libs", position: "34%" })} className="projects__tab"> Libraries </span>
                    <span onClick={ () => handleTabSelected({ category: "misc", position: "68%" })} className="projects__tab"> Misc </span>
                </div>
            </div>

            <ProjectCard img={ReactLinkTabsPNG} name={"HADRON"} description={lorum} badges={["javascript", "nodejs", "html5", "postgres", "heroku"]} />

            {props.children}
        </section>
    );
}

function ProjectCard(props) {
    return(
        <div className="project-card">
            <div className="project-card__header--mobile">
                <h3> {props.name} </h3>
            </div>
            <div className="project-card__left">

                <img className="project-card__img" src={props.img || ""}></img>
                <div className="project-card__img-tray">
                    <label className="project-card__tray-label">Preview</label>
                </div>
            </div>
            <div className="project-card__right">
                <div className="project-card__header">
                    <h3> {props.name} </h3>
                </div>
                <div className="project-card__content">
                    <p> {props.description} </p>
                    <p> <br /> Built With: </p>
                    <BadgeCollection badges={props.badges} />
                </div>
            </div>
        </div>
    )
}
 
export default Projects;

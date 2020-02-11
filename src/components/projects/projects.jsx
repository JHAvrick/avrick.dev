import React, { useState } from 'react';
import BadgeCollection from './badge-collection';
import ProjectList from './project-list';
import { motion } from 'framer-motion';
import Variants from '../variants';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './projects.css';
import './project-card.css';
import './carousel.css';

function Projects(props) {
    
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleCarouselScroll = (direction) => {
        let currentSetLength = ProjectList[selectedTab.category].length;
        if (direction === "prev"){ 
            setCarouselIndex(carouselIndex === 0 ? (currentSetLength - 1)  : (carouselIndex - 1));
            return;
        }

        if (direction === "next") {
            setCarouselIndex(carouselIndex === (currentSetLength - 1) ? 0  : (carouselIndex + 1));
            return;
        }
    }

    const [selectedTab, setSelectedTab] = useState({ category: "apps", position: "0" });
    const handleTabSelected = (selected) => {
        setCarouselIndex(0);
        setSelectedTab(selected);
    }

    return (
        <section className="projects">

            <h2 className="projects__header">Projects</h2>

            <div className="projects__tabs-container">
                <div className="projects__tabs"> 
                    <span style={{ left: selectedTab.position }} className="projects__selection"></span>
                    <span onClick={ () => handleTabSelected({ category: "apps", position: "0%" }) }  className="projects__tab"> Apps </span>
                    <span onClick={ () => handleTabSelected({ category: "libs", position: "33%" })} className="projects__tab"> Libraries </span>
                    <span onClick={ () => handleTabSelected({ category: "misc", position: "66%" })} className="projects__tab"> Misc </span>
                </div>
            </div>


            <div className="carousel">
                <div onClick={() => handleCarouselScroll("prev")} className="carousel__prev"> {"<"} </div>

                
                    <motion.div initial={Variants.Page.initial} animate={Variants.Page.enter} exit={Variants.Page.exit}>
                        <ProjectCard
                            img={ProjectList[selectedTab.category][carouselIndex].preview || ""} 
                            name={ ProjectList[selectedTab.category][carouselIndex].name } 
                            description={ ProjectList[selectedTab.category][carouselIndex].description } 
                            badges={ ProjectList[selectedTab.category][carouselIndex].badges } 
                            link={
                                ProjectList[selectedTab.category][carouselIndex].live ||
                                ProjectList[selectedTab.category][carouselIndex].github
                            }
                        />
                    </motion.div>
                
                
                <div onClick={() => handleCarouselScroll("next")} className="carousel__next"> {">"} </div>

                <div className="carousel__dots">
                    {ProjectList[selectedTab.category].map((item, index) => 
                        <span key={index} onClick={() => setCarouselIndex(index)} className={carouselIndex === index ? "carousel__dot--selected" : "carousel__dot"}></span> 
                    )}
                </div>
            </div>

            <div className="carousel__dots">
            </div>

            {props.children}
        </section>
    );
}

function ProjectCard(props) {
    return(
        <div className="project-card">
            <div className="project-card__header--mobile">
                <h3> {props.name} </h3>
                <a target="_blank" rel="noopener noreferrer" className="project-card__ext-link" href={props.link}><FaExternalLinkAlt size={15}/></a>
            </div>
            <div className="project-card__left">

                <img alt="Project Preview" className="project-card__img" src={props.img || ""}></img>
                <div className="project-card__img-tray">
                    <label className="project-card__tray-label">Preview</label>
                </div>
            </div>
            <div className="project-card__right">
                <div className="project-card__header">
                    <h3> {props.name} </h3>
                    <a target="_blank" rel="noopener noreferrer" className="project-card__ext-link" href={props.link}><FaExternalLinkAlt size={15}/></a>
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

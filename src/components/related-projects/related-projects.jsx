import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectCategories from './project-categories';
import Projects from './projects';
import './related-projects.css';
import './project-item.css';

const container = {
  hidden: { opacity: 0, transform: "translateY(-50px)" },
  show: {
    transform: "translateY(0px)",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: .1
    }
  }
}

const item = {
  hidden: { opacity: 0, transform: "translateY(-50px)" },
  show: { opacity: 1, transform: "translateY(0px)" },
} 

function RelatedProjects(props) { 

  const [projectList, setProjectList] = useState(ProjectCategories[props.skillId || 0].map((projectKey) => Projects[projectKey]));
  useEffect(() => setProjectList(ProjectCategories[props.skillId].map((projectKey) => Projects[projectKey])), [props.skillId]);

  return (
      <motion.ul className="related-projects" variants={container} initial="hidden" animate="show" exit={{opacity: 0,  transform: "translateY(50px)" }} >
        <p className="related-projects__label related-projects__hide-md"> Select a skill to see related projects! </p>
        <p className="related-projects__label related-projects__hide-sm"> Related Projects </p>
        {/* <AnimatePresence> */}
          {projectList.map((project, index) => 
            <ProjectItem 
              key={index}
              name={project.name}
              description={project.description}
              icon={project.icon}
              live={project.live}
              github={project.github}
            />
          )}
        {/* </AnimatePresence> */}
      </motion.ul>
  );
}

function ProjectItem(props){
  return (
    <motion.li initial="hidden" animate="show" variants={item} exit={{opacity: 0,  transform: "translateY(50px)" }} className="project-item">
      <div className="project-item__icon"></div>
      <div className="project-item__content">
        <p className="project-item__title">{props.name}</p>
        <p className="project-item__description">{props.description}</p>
      </div>
      <div className="project-item__links">
        {props.live ? <a style={{paddingLeft: "3px"}} target="_blank" rel="noopener noreferrer" href={props.live}><FaExternalLinkAlt className="project-item__link-icon" /></a> : ""}
        {props.github ? <a target="_blank" rel="noopener noreferrer" href={props.github}><FaGithub className="project-item__link-icon" /></a> : ""}
      </div>
    </motion.li>
  );
}

export default RelatedProjects;
